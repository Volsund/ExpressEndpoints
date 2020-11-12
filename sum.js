const express = require("express");
const accepts = require("accepts");
const router = express.Router();
const { getXlsxStream } = require("xlstream");

router.get("/", function (req, res) {
    res.send(`GET route on Excel-Sum. You are probably more interested in POST route...`);
});

router.post("/", async function (req, res) {
    const stream = await getXlsxStream({
        filePath: "./data.xlsx",
        sheet: 0,
    });
    let nums = await new Promise(function (resolve, reject) {
        let numbers = [];
        stream.on("data", (e) => {
            numbers.push(e.raw.obj.A);
        });

        stream.on("end", (e) => {
            resolve(numbers);
        });
    });

    let accept = accepts(req);

    let result = nums.reduce((a, b) => a + b, 0);

    switch (accept.type(["json", "html"])) {
        case "json":
            res.json({ SUM: result });
            break;
        case "html":
            res.setHeader("Content-Type", "text/html");
            res.send(`<b>SUM is ${result}</b>`);
            break;
        default:
            res.setHeader("Content-Type", "text/plain");
            res.send(`SUM is ${result}`);
            break;
    }
});

module.exports = router;
