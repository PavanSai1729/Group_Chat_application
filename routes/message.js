const express = require("express");
const sms = require("./sms");

const router = express.Router();

router.get("/", (req,res) => {
    res.send(`<form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"
    method="POST"><input id="message" name="message" type="text"placeHolder="message"><input type="hidden" name="username" id="username"><button type="submit">send</button></form>`);
   
});

router.post("/", (req,res) => {
    sms.push(`{${req.body.username} : ${req.body.message}}`);
    console.log(sms);

    res.send(`<p>${req.body.username}:${req.body.message}</p>`);
    console.log(`${req.body.username}:${req.body.message}`);

    res.redirect(`/`);
    
})

module.exports = router;