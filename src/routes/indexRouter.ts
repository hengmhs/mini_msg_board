import { Router } from "express";
import { messages } from "../db";
import { getIndexPage } from "../controllers/indexController";

const indexRouter = Router();

indexRouter.get("/", getIndexPage);

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

export default indexRouter;
