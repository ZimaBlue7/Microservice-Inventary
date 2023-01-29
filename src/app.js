import express from "express";
import morgan from "morgan";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";
import categoryRoutes from "./routes/category.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(productsRoutes);
app.use(categoryRoutes);

export default app;
