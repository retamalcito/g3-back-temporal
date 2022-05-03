const auth0 = require("./auth/auth0");
const checkUser = require("./auth/checkUser");
const currentUser = require("./user/currentUser");

module.exports = {
  auth0,
  checkUser,
  currentUser
};
