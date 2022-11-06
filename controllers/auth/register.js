const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const shortid = require("shortid");

const { User } = require("../../models/users/user");
const { RequestError, sendEmail } = require("../../utils");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);
  const verificationToken = shortid.generate().toString();
  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Email verification",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to finish verification</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = register;
