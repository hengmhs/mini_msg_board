import express, { NextFunction, Request, Response } from "express";
import path from "path";
import indexRouter from "./routes/indexRouter";

const app = express();
const PORT = 3000;

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());

app.use("/", indexRouter);

// Catch every thrown error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
