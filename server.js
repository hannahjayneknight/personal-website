import express from "express";

const port = 8080;

const app = express();

app.use(express.static("../personal-website"));

// THESE ARE FOR THE DYNAMIC SERVER
app.use(function (req, res, next) {
    req.testing = "testing";
    return next();
});

app.get("/", function (req, res, next) {
    res.end();
});

app.listen(port, function () {
    console.log("Listening on port " + port);
});
