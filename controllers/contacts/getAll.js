const { Contact } = require("../../models/contacts/contact");

const getAll = async (req, res) => {
    const owner = req.user._id;
    const { page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email");
  res.status(200).json(result);
};

module.exports = getAll;
