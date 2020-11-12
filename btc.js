const express = require("express");
const accepts = require("accepts");
const request = require("request");
const router = express.Router();

router.get("/", function (req, res) {
    request("https://api.coindesk.com/v1/bpi/currentprice.json", function (
        error,
        response,
        body
    ) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const eurPrice = data.bpi.EUR.rate_float;
            const usdPrice = data.bpi.USD.rate_float;
            const gbpPrice = data.bpi.GBP.rate_float;

            let accept = accepts(req);

            let responseObj = {};
            let eur = "EUR";
            let usd = "USD";
            let gbp = "GBP";
            responseObj[eur] = eurPrice;
            responseObj[usd] = usdPrice;
            responseObj[gbp] = gbpPrice;

            switch (accept.type(["json", "html"])) {
                case "json":
                    res.json(responseObj);
                    break;
                case "html":
                    res.setHeader("Content-Type", "text/html");
                    res.send(`
                                <h2> BTC price EUR: ${eurPrice} </h2> <br/>
                                <h2> BTC price USD: ${usdPrice} </h2> <br/>
                                <h2> BTC price USD: ${gbpPrice} </h2> <br/>
                            `);
                    break;
                default:
                    res.setHeader("Content-Type", "text/plain");
                    res.send(
                        `BTC price EUR: ${eurPrice}, BTC price USD: ${usdPrice},BTC price USD: ${gbpPrice}`
                    );
                    break;
            }
        }
    });
});

router.post("/", function (req, res) {
    res.send("POST route on BTC.");
});

module.exports = router;
