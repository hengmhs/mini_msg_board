import { Request, Response } from "express";
import { messages } from "../db";

const getIndexPage = (req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

export { getIndexPage };
