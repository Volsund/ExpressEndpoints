# Express Endpoints

## Description

Express server containing 3 endpoints and tests for them.

All 3 routes can return json/html/plain text depending on Accept headers.

## Usage

`npm install`

`npm start`

`npm run test` for running tests.

## Endpoint #1
### BTC price

Endpoint returns a text of the current price of BTC in EUR.

* Method: `GET`
* Endpoint: `http://localhost:3000/btc`

Prices are taken from: https://api.coindesk.com/v1/bpi/currentprice.json.

## Endpoint #2
### Country capital

Endpoint returns a capital of the provided country.

* Method: `GET`
* Endpoint: `http://localhost:3000/capital`
* Query parameters: 
    * `country`
* Example of request and what should be returned: 
    * `GET` `http://localhost:3000/capital?country=latvia` 
    * Returned text: `Capital of Latvia is Riga` 

## Endpoint #3
### Excel SUM

Endpoint returns a SUM of the column `A` inside posted `.xlsx` file.

* Method: `POST`
* Endpoint: `http://localhost:3000/excel-sum`
* Form-data parameters: 
    * `file` - `.xlsx` file 
* Example of request and what should be returned: 
    * `POST` `http://localhost:3000/excel-sum`
    * `form-data` with `file` field containing provided xlsx file.
    * Returned text: `SUM is 6216` 
