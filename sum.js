const express = require("express");
const router = express.Router();
const { getXlsxStream } = require("xlstream");

router.get("/", function (req, res) {
    res.send(`GET route on Excel - Sum`);
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

    let result = nums.reduce((a, b) => a + b, 0);

    res.send(`SUM is ${result}`);
});

module.exports = router;
