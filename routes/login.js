const express = require("express");
const router = express.Router();

router.get("/login", (req,res) => {
    res.send(`<form action="/login" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" method="POST">
    <input id="username" type="text" name="name">
    <button type="submit">submit</button></form>`);
});

router.post("/login", (req,res) => {
    res.redirect("/");
});

module.exports = router;