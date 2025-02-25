const asynchandler = require("express-async-handler")

const getContacts = asynchandler(async(req,res) => {
    res.status(200).json({message: "Get all contacts"});
});


const createContact = asynchandler(async(req,res) => {
    console.log("The request body is: ", req.body);
    const {name, email, mobileno} = req.body;
    if(!name || email || mobileno){
        res.status(400);
        throw new Error("All fields are mandatory");
    } 
    res.status(201).json({message: "Create contact"});
});

const getContact = asynchandler(async(req,res) => {
    res.status(200).json({message: `Got contact for ${req.params.id}`});
});

const updateContact = asynchandler(async(req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});


const deleteContact = asynchandler(async(req,res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});

module.exports = {getContacts,getContact, createContact,updateContact,deleteContact};