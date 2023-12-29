const express = require("express");
const app = express()

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/page-not-found.html")
});

app.listen(8080);

// © 2021 Hyderite. All rights reserved.