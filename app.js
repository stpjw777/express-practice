const express = require("express");

const app = express();

const port = 8001;

app.get("/", (req, res) => res.send("Hello world"));
app.get("/about", (req, res) => res.send("this is about page"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
