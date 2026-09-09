import express from "express";
import cors from "cors";
import compression from "compression";

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;