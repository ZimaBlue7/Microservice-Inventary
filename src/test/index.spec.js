import request from "supertest";
import router from "../routes/products.routes.js";
import app from "../app.js";

describe("GET /products", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app.use(router)).get("/products").send();
    expect(response.statusCode).toStrictEqual(200);
  });
});
