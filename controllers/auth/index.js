const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const checkCurrent = require("./checkCurrent");
const updateSubscription = require("./updateSubscription.js");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const repeatVerify = require("./repeatVerify");

module.exports = {
  register,
  login,
  logout,
  checkCurrent,
  updateSubscription,
  updateAvatar,
  verify,
  repeatVerify,
};
