const { User } = require("../../models/users/user");
const { RequestError } = require("../../utils");

const updateSubscription = async (req, res) => {
  const result = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(201).json(result);
};
module.exports = updateSubscription;
