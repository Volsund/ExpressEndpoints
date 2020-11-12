const app = require("../server.js");
const supertest = require("supertest");
const request = supertest(app);

it("/btc endpoint working with status code 200", async (done) => {
  const response = await request.get("/btc");

  expect(response.status).toBe(200);
  done();
});

it("/btc endpoint working and it has received expected values from API. ", async (done) => {
  const response = await request.get("/btc");

  const x = /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g;

  expect(response.body.EUR.toString()).toMatch(x);
  expect(response.body.USD.toString()).toMatch(x);
  expect(response.body.GBP.toString()).toMatch(x);

  expect(response.status).toBe(200);

  done();
});

it("/btc endpoint working with json response type", async (done) => {
  const response = await request.get("/btc").set("Accept", "application/json");

  expect(response.status).toBe(200);

  done();
});

it("/btc endpoint working with html response type", async (done) => {
  const response = await request.get("/btc").set("Accept", "text/html");

  expect(response.status).toBe(200);

  done();
});

it("/btc endpoint with correct city and default/plain text response ", async (done) => {
  const response = await request.get("/btc").set("Accept", "text/plain");
  expect(response.status).toBe(200);

  done();
});
