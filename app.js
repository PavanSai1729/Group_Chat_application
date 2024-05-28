const express = require("express");
const bodyParser = require("body-parser");
const loginRoute = require("./routes/login.js");
const messageRoute = require("./routes/message.js");

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));


app.use(loginRoute);
app.use(messageRoute);
app.listen(7000);