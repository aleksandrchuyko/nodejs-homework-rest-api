const { User } = require("../../models/users/user");
const { RequestError, sendEmail } = require("../../utils");

const { BASE_URL } = process.env;

const repeatVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404);
  }
  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Email verification",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to finish verification</a>`,
  };

  await sendEmail(mail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = repeatVerify;
