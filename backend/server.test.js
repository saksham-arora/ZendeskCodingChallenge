const server = require("./server");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("User Endpoints", () => {
  it("GET /", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    // expect(res.body).toHaveProperty("tickets");
  });

  it("GET /next", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    // expect(res.body).toHaveProperty("tickets");
  });

  it("GET /prev", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    // expect(res.body).toHaveProperty("tickets");
  });
});
