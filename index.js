require("express")().use(require("express").static(__dirname + "/public")).use((_, res) => {
    res.status(404).sendFile(__dirname + "/page-not-found.html");
}).listen(8080);

// © 2021 Hyderite. All rights reserved.