const express = require("express");

const app = express();

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.set("view engine", "ejs");

const pLanguages = [];

app.get("/", (req, res) => {
    res.status(200).render("index", {pLanguages});
});

app.get("/contact", (req, res) => {
    res.status(200).render("contact", {});
})

app.post("/", (req, res) => {
    const pLanguage = req.body.pLanguage;
    pLanguages.push(pLanguage);
    console.log(pLanguages);
    res.redirect("/");
    console.log(pLanguage);
})

module.exports = app;