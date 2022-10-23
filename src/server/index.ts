import { bmw320, bmw525, mercedes } from "../models/cars";
import express from "express";
import cors from "cors";
import { today, thisWeek, thisMonth } from "../models/posts";
import { mini } from "../models/cars";

const app = express();
app.use(cors());

app.get("/posts", (req, res) => {
  res.json([today, thisWeek, thisMonth]);
});

app.get("/cars", (req, res) => {
  res.json([bmw320, bmw525, mini, mercedes]);
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
