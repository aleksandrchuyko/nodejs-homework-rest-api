const { Contact } = require('../../models/contacts/contact');

const addNew = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
}

module.exports = addNew;