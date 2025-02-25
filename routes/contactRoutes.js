const express = require("express");
const router = express.Router();
const {getContacts, createContact,updateContact,deleteContact, getContact} = require("../controllers/contactcontroller");

router.route("/").get(getContacts).post(createContact).get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;