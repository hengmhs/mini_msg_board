import { Request, Response } from "express";
import { messages } from "../db";
import expressAsyncHandler from "express-async-handler";

const getMessagePage = expressAsyncHandler((req: Request, res: Response) => {
  const { id } = req.params;

  res.render("message", { message: messages[Number(id)] });
});

export { getMessagePage };
