const app = require("../server.js");
const supertest = require("supertest");
const request = supertest(app);

it("gets to home page", async (done) => {
  const response = await request.get("/");

  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello, World!");
  done();
});
