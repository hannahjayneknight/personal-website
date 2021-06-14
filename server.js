
import express from "express";
//import expressWS from "express-ws";

//function ignorparam() {}

const port = 8080;

const app = express();
//expressWS(app);

app.disable("x-powered-by");

app.use("/", express.static(""));

// THESE ARE FOR WEB SOCKETS
/*
app.use(function (req, res, next) {
    ignorparam(res);
    req.testing = "testing";
    return next();
});

app.get("/", function (req, res, next) {
    ignorparam(next);
    ignorparam(req);
    res.end();
});
*/



/////////////////////////////////////////////////////////



app.listen(port, function () {
    console.log("Listening on port " + port);
});
