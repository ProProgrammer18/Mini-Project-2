const express = require("express");
const router = require("./routes/noticeRoutes");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(cookieParser());
app.use(express.json());
// app.use(express.static());

app.use(express.static(path.join(__dirname, "views")));

app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use("/", router);

module.exports = app;
