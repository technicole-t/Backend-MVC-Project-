process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const { expect } = require("chai");
const client = require(".././db/connection");

after(() => {
  client.destroy();
});

describe("/api/treasures", () => {
  it("GET: returns status: 200 & all treasures including shop name and other details", () => {
    return request(app)
      .get("/api/treasures")
      .expect(200)
      .then(res => {
        console.log(res.body);
        const treasure = res.body.treasures[0];
        expect(treasure).to.have.all.keys(
          "treasure_id",
          "treasure_name",
          "colour",
          "age",
          "cost_at_auction",
          "shop_name"
        );
      });
  });
});
