const path = require("path");
const fs = require("fs").promises;

const shortid = require("shortid");

const dbPath = path.join(__dirname, "contacts.json");

async function parseContacts() {
  try {
    const data = await fs.readFile(dbPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

const listContacts = async () => {
  const data = await parseContacts();
  return data;
};

const getContactById = async (contactId) => {
  const data = await parseContacts();
  const result = data.find((item) => item.id === contactId.toString());
  return result || null;
};

const removeContact = async (contactId) => {
  const data = await parseContacts();
  const removedContact = data.find((item) => item.id === contactId);
  if (removedContact) {
    const contacts = data.filter((item) => item.id !== contactId);
    await fs.writeFile(dbPath, JSON.stringify(contacts));
  }
  return removedContact || null;
};

const addContact = async (body) => {
  const data = await parseContacts();
  const newContact = {
    id: shortid.generate().toString(),
    ...body,
  };
  data.push(newContact);
  await fs.writeFile(dbPath, JSON.stringify(data));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const data = await parseContacts();
  const index = data.findIndex((item) => item.id === contactId);
  if (index >= 0) {
    data[index] = { contactId, ...body };
    await fs.writeFile(dbPath, JSON.stringify(data));
  }
  return data[index] || null;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

// --------------------
// const path = require("path");
// const fs = require("fs").promises;

// const shortid = require("shortid");

// // const contactsParsed = JSON.parse()
// const dbPath = path.resolve("./db/contacts.json");

// async function parseContacts() {
//   try {
//     const data = await fs.readFile(dbPath, "utf8");
//     return JSON.parse(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function listContacts() {
//   try {
//     const data = await parseContacts();
//     console.table(data);
//   } catch (error) {}
// }

// async function getContactById(contactId) {
//   try {
//     const data = await parseContacts();
//     contact = data.filter((item) => {
//       return item.id === contactId.toString();
//     });
//     if (contact[0]) {
//       console.log(contact[0]);
//     } else {
//       console.log(`User with id ${contactId} not found`);
//     }
//   } catch (error) {}
// }

// async function removeContact(contactId) {
//   try {
//     const data = await parseContacts();
//     const contacts = data.filter((item) => {
//       return item.id !== contactId.toString();
//     });
//     await fs.writeFile(dbPath, JSON.stringify(contacts));
//     console.log("Contact removed!");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// async function addContact(name, email, phone) {
//   try {
//     const data = await parseContacts();
//     data.push({
//       id: shortid.generate().toString(),
//       name: name.toString(),
//       email: email.toString(),
//       phone: phone.toString(),
//     });
//     await fs.writeFile(dbPath, JSON.stringify(data));
//     console.log("New contact created!");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// };
