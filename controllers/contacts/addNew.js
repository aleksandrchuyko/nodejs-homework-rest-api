const contacts = require('../../models/contacts/contacts');

const addNew = async (req, res) => {
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
}

module.exports = addNew;