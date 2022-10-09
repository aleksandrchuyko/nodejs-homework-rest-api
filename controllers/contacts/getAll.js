const contacts = require('../../models/contacts/contacts');

const getAll = async (req, res) => {
    const result = await contacts.listContacts();
    res.status(200).json(result);
}

module.exports = getAll;