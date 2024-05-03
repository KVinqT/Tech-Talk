import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import apiRouter from "./api";

const NODE_ENV = process.env.NODE_ENV || "development";
dotenv.config({ path: path.resolve(__dirname, "../.env." + NODE_ENV) });
const HOST = process.env.HOST || "http://localhost";
const PORT = parseInt(process.env.PORT || "5000");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true })); //formData like access
app.use(express.json()); //json data parse

app.use("/api", apiRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(PORT, async () => {
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
