import { Router } from "express";

import {
  getNewMessageFormPage,
  postNewMessage,
} from "../controllers/newMessageController";

const newMessageRouter = Router();

newMessageRouter.get("/", getNewMessageFormPage);

newMessageRouter.post("/", postNewMessage);

export default newMessageRouter;
