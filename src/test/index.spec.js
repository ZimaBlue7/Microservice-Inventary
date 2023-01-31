import request from "supertest";
import router from "../routes/products.routes.js";
import app from "../app.js";
import { Product } from "../models/Product.js";

describe("Products", () => {
  test("GET /products", async () => {
    Product.findAll = await jest.fn(() => [
      {
        nombre: "Martillo",
        marca: "herra",
        precio: 10000,
        imagen: "imagen",
        id_categoria: 2,
        cantidad: 100,
        descripcion: "descripcion",
        promocion: false,
      },
      {
        nombre: "martillo2",
        marca: "marti",
        precio: 10000,
        imagen: "imagen2",
        id_categoria: 2,
        cantidad: 200,
        descripcion: "descrip2",
        promocion: false,
      },
    ]);

    const response = await request(app.use(router)).get("/products");

    expect(response.status).toBe(200);
  });
});

/** 
describe("GET /products", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app.use(router)).get("/products").send();
    expect(response.statusCode).toBe(200);
  });
});
*/
