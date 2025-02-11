import { Request, Response } from "express";
import { messages } from "../db";
import expressAsyncHandler from "express-async-handler";

const getIndexPage = expressAsyncHandler((req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

export { getIndexPage };
