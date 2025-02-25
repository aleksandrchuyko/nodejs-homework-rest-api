const { Contact } = require("../../models/contacts/contact");
const { RequestError } = require("../../utils");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findOne({ _id: contactId });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = getById;
