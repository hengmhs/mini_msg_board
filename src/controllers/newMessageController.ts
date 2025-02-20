import { Request, Response } from "express";
import { messages } from "../db";
import expressAsyncHandler from "express-async-handler";
import { insertMessage } from "../db/queries";

const getNewMessageFormPage = expressAsyncHandler(
  (req: Request, res: Response) => {
    res.render("form");
  }
);

const postNewMessage = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { username, text } = req.body;
    await insertMessage(username, text);
    res.redirect("/");
  }
);

export { getNewMessageFormPage, postNewMessage };
