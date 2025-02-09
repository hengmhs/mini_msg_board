import { Router } from "express";
import { messages } from "../db";
import {
  getIndexPage,
  getNewMessageFormPage,
  postNewMessage,
} from "../controllers/indexController";

const indexRouter = Router();

indexRouter.get("/", getIndexPage);

indexRouter.get("/new", getNewMessageFormPage);

indexRouter.post("/new", postNewMessage);

export default indexRouter;
