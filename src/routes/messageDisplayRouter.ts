import { Router } from "express";
import { getMessagePage } from "../controllers/messageDisplayController";

const messageDisplayRouter = Router();

messageDisplayRouter.get("/:id", getMessagePage);

export default messageDisplayRouter;
