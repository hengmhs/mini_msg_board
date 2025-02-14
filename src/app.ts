import express, { NextFunction, Request, Response } from "express";
import path from "path";
import indexRouter from "./routes/indexRouter";
import newMessageRouter from "./routes/newMessageRouter";
import messageDisplayRouter from "./routes/messageDisplayRouter";

const app = express();
const PORT = 8000;

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());

/*
In order to get and use the data from your form, you will need to access the contents of your form inside router.post() as an object called req.body. 
The individual fields inside the body object are named according to the name attribute on your inputs (the value of <input name="messageText"> will show up as req.body.messageText inside the router.post function). 
For this to work as intended, you’ll need to use a app level Express middleware called express.urlencoded() to parse the form data into req.body
*/

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/msg", messageDisplayRouter);

// Catch every thrown error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
