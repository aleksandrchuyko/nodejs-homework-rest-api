const express = require("express");
const contactsController = require("../../controllers/contacts");

const router = express.Router();

const { validateReqBody , authenticate } = require('../../middlewares');

const {schemas} = require('../../models/contacts/contact');

const { controllersWrapper } = require('../../utils');



router.get("/", authenticate, controllersWrapper(contactsController.getAll));

router.get("/:contactId", authenticate, controllersWrapper(contactsController.getById));

router.post("/", authenticate, validateReqBody(schemas.addSchema), controllersWrapper(contactsController.addNew));

router.delete("/:contactId", authenticate, controllersWrapper(contactsController.removeById));

router.put("/:contactId", authenticate, validateReqBody(schemas.addSchema), controllersWrapper(contactsController.updateById));

router.patch("/:contactId/favorite", authenticate, validateReqBody(schemas.updateFavoriteSchema), controllersWrapper(contactsController.updateFavorite));

module.exports = router;
