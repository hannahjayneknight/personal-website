/*jslint devel: true */
import express from "express";
const port = 8080;
const app = express();


app.disable("x-powered-by");

app.use("/", express.static(""));

app.listen(port, function () {
    console.log("Listening on port " + port);
});

