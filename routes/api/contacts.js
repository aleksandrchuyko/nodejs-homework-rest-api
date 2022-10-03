const express = require("express");
const contactsController = require("../../controllers/contacts");

const router = express.Router();

const { validateReqBody } = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const { controllersWrapper } = require('../../utils');



router.get("/", controllersWrapper(contactsController.getAll));

router.get("/:contactId", controllersWrapper(contactsController.getById));

router.post("/", validateReqBody(schemas.addSchema), controllersWrapper(contactsController.addNew));

router.delete("/:contactId", controllersWrapper(contactsController.removeById));

router.put("/:contactId", validateReqBody(schemas.addSchema), controllersWrapper(contactsController.updateById));

module.exports = router;
