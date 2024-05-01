import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

const NODE_ENV = process.env.NODE_ENV || "development";
dotenv.config({ path: path.resolve(__dirname, "../.env." + NODE_ENV) });

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
