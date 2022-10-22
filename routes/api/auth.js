const express = require("express");

const router = express.Router();

const authController = require("../../controllers/auth");

const { validateReqBody, authenticate, upload } = require("../../middlewares");

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

router.get(
  "/current",
  authenticate,
  controllersWrapper(authController.checkCurrent)
);

router.get("/logout", authenticate, controllersWrapper(authController.logout));

router.patch(
  "/",
  authenticate,
  validateReqBody(schemas.subscribeSchema),
  controllersWrapper(authController.updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllersWrapper(authController.updateAvatar)
);

module.exports = router;
