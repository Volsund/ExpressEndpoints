const app = require("../server.js");
const supertest = require("supertest");
const request = supertest(app);

it("/excel-sum endpoint working with status 200", async (done) => {
    const response = await request.post("/excel-sum");

    expect(response.status).toBe(200);

    done();
});

it("/excel-sum endpoint working with json response", async (done) => {
    const response = await request
        .post("/excel-sum")
        .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.text).toBe('{"SUM":6216}');

    done();
});

it("/excel-sum endpoint working with html response", async (done) => {
    const response = await request
        .post("/excel-sum")
        .set("Accept", "text/html");

    expect(response.status).toBe(200);
    expect(response.text).toBe(`<b>SUM is 6216</b>`);

    done();
});

it("/excel-sum endpoint working with default/plain text response", async (done) => {
    const response = await request
        .post("/excel-sum")
        .set("Accept", "text/plain");

    expect(response.status).toBe(200);
    expect(response.text).toBe(`SUM is 6216`);

    done();
});

it("/excel-sum GET route working", async (done) => {
    const response = await request.get("/excel-sum");

    expect(response.status).toBe(200);
    expect(response.text).toBe(`GET route on Excel-Sum. You are probably more interested in POST route...`);

    done();
});
