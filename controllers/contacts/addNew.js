const { Contact } = require('../../models/contacts/contact');

const addNew = async (req, res) => {
    const owner = req.user._id;
    const result = await Contact.create({...req.body, owner});
    res.status(201).json(result);
}

module.exports = addNew;