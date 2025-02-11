import { Router } from "express";
import { getIndexPage } from "../controllers/indexController";

const indexRouter = Router();

indexRouter.get("/", getIndexPage);

export default indexRouter;
