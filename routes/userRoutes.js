const express = require("express");

const router = express.Router();

router.post("/register", (req,resp) =>{
    res.json({message: "Register the user"});
});

router.post("/login", (req,resp) =>{
    res.json({message: "Login user"});
});

router.post("/current", (req,resp) =>{
    res.json({message: "Current user info"});
});