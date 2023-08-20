const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    res.end("Top Page");
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});