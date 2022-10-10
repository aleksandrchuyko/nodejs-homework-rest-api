const { Contact } = require('../../models/contacts/contact');

const getAll = async (req, res) => {
    const result = await Contact.find({}, "-createdAt -updatedAt");
    res.status(200).json(result);
}

module.exports = getAll;