const express = require("express");

const router = express.Router();

const authController = require("../../controllers/auth");

const { validateReqBody } = require("../../middlewares");

const { schemas } = require("../../models/users/user");

const { controllersWrapper } = require("../../utils");

router.post(
  "/register",
  validateReqBody(schemas.registerSchema),
  controllersWrapper(authController.register)
);

router.post(
  "/login",
  validateReqBody(schemas.loginSchema),
  controllersWrapper(authController.login)
);

module.exports = router;
