import express from "express";
const app = express();

const limit = "1000mb";
app.use(express.urlencoded({ extended: true, limit }));
app.use(express.json({ limit }));

import cors from "cors";
app.use(cors({ origin: true, credentials: true }));

import routes from "./routes";
app.use("/api/v1/product", routes);

import { error } from "./middlewares";
app.use(error.invalidUrl);
app.use(error.errors);

export default app;
