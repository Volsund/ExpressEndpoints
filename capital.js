const express = require("express");
const accepts = require("accepts");
const cities = require("country-json/src/country-by-capital-city.json");
const router = express.Router();

router.get("/", function (req, res) {
    let requestedCountry = req.query.country;

    const found = cities.find(
        (element) => element.country.toLowerCase() === requestedCountry
    );
    let result = found.city;
    let accept = accepts(req);

    switch (accept.type(["json", "html"])) {
        case "json":
            res.setHeader("Content-Type", "application/json");
            res.write(`{"${requestedCountry}":"${result}"}`);
            break;
        case "html":
            res.setHeader("Content-Type", "text/html");
            res.write(
                `<b>The capital of ${requestedCountry} is ${result}!</b>`
            );
            break;
        default:
            res.setHeader("Content-Type", "text/plain");
            res.write(`The capital of ${requestedCountry} is ${result}!`);
            break;
    }
});

router.post("/", function (req, res) {
    res.send("POST route on Capital.");
});

module.exports = router;
