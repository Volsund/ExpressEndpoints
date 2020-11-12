const app = require("../server.js");
const supertest = require("supertest");
const request = supertest(app);

it("/capital endpoint with correct city and json response ", async (done) => {
    const response = await request
        .get("/capital?country=germany")
        .set("Accept", "application/json");
    expect(response.status).toBe(200);
    expect(response.text).toBe('{"germany":"Berlin"}');

    done();
});

it("/capital endpoint with correct city and html response ", async (done) => {
    const response = await request
        .get("/capital?country=estonia")
        .set("Accept", "text/html");
    expect(response.status).toBe(200);
    expect(response.text).toBe('<b>The capital of estonia is Tallinn!</b>');

    done();
});

it("/capital endpoint with correct city and default/plain text response ", async (done) => {
    const response = await request
        .get("/capital?country=norway")
        .set("Accept", "text/plain");
    expect(response.status).toBe(200);
    expect(response.text).toBe('The capital of norway is Oslo!');

    done();
});
