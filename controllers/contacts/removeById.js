const { Contact } = require("../../models/contacts/contact");
const { RequestError } = require("../../utils");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  console.log(result);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(201).json(result);
};

module.exports = removeById;
