const express = require("express");
const contactsController = require("../../controllers/contacts");

const router = express.Router();

const { validateReqBody } = require('../../middlewares');

const {schemas} = require('../../models/contacts/contact');

const { controllersWrapper } = require('../../utils');



router.get("/", controllersWrapper(contactsController.getAll));

router.get("/:contactId", controllersWrapper(contactsController.getById));

router.post("/", validateReqBody(schemas.addSchema), controllersWrapper(contactsController.addNew));

router.delete("/:contactId", controllersWrapper(contactsController.removeById));

router.put("/:contactId", validateReqBody(schemas.addSchema), controllersWrapper(contactsController.updateById));

router.patch("/:contactId/favorite", validateReqBody(schemas.updateFavoriteSchema), controllersWrapper(contactsController.updateFavorite));

module.exports = router;
