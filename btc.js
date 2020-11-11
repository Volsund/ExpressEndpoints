const express = require("express");
const router = express.Router();
const request = require("request");

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
            
            res.send(`
                        <h2> BTC price EUR: ${eurPrice} </h2> <br/>
                        <h2> BTC price USD: ${usdPrice} </h2> <br/> 
                        <h2> BTC price USD: ${gbpPrice} </h2> <br/> 
                    `);
        }
    });
});

router.post("/", function (req, res) {
    res.send("POST route on BTC.");
});

//export this router to use in our index.js
module.exports = router;
