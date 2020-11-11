const express = require("express");
const app = express();

const btc = require("./btc.js");
const capital = require("./capital.js");
const sum = require("./sum.js");

app.use("/btc", btc);
app.use("/capital", capital);
app.use("/excel-sum", sum);

app.get("/", function (req, res) {
    res.send("Hello, World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
