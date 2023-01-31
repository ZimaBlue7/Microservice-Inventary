import request from "supertest";
import router from "../routes/products.routes.js";
import sinon from "sinon";
import app from "../app.js";
import { Product } from "../models/Product.js";
import { Categoria } from "../models/categoria.js";
import { json } from "sequelize";

describe("Products", () => {
  test("Get /products", async () => {
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

  test("should have content-type", async () => {
    const response = await request(app.use(router)).post("/products").send();
    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  test("should respond Array", async () => {
    const response = await request(app.use(router)).get("/products").send();
    expect(response.body).toBeInstanceOf(Array);
  });

  test("should have content-type", async () => {
    const response = await request(app.use(router)).post("/products").send();
    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  test("Get product/:id", async () => {
    Product.findOne = await jest.fn(() => [
      {
        id: 1,
        nombre: "Martillo",
        marca: "herra",
        precio: 10000,
        imagen: "imagen",
        id_categoria: 2,
        cantidad: 100,
        descripcion: "descripcion",
        promocion: false,
      },
    ]);
    const response = await request(app.use(router)).get("/product/1");
    //console.log(response);

    expect(response.status).toBe(200);
  });
});

describe('if get("/categorys", getCategorias) exist', () => {
  test("should respond whit cod 200", async () => {
    Categoria.findAll = await jest.fn(() => [
      {
        nombre: "martillos",
      },
      { nombre: "Tubos" },
    ]);
    const response = await request(app.use(router)).get("/categorys").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond Array", async () => {
    const response = await request(app.use(router)).get("/categorys").send();
    expect(response.body).toBeInstanceOf(Object);
  });

  test("should have content-type", async () => {
    const response = await request(app.use(router)).post("/category").send();
    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});

/** 
describe("GET /products", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app.use(router)).get("/products").send();
    expect(response.statusCode).toBe(200);
  });
});
 test("Put products/:id", async () => {
    const sandbox = sinon.createSandbox();
    const deleteProduct = sandbox.stub(Product, "destroy");

    const user = {
      id: 1,
      nombre: "Martillo",
      marca: "herra",
      precio: 10000,
      imagen: "imagen",
      id_categoria: 2,
      cantidad: 100,
      descripcion: "descripcion",
      promocion: false,
    };
    deleteProduct.resolves(user);

    const response = await request(app.use(router))
      .delete("/product/" + user.id)
      .expect(204);
    expect(response.status).toBe(204);
    sandbox.restore();
  });

*/
