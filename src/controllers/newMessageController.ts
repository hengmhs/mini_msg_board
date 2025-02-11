import { Request, Response } from "express";
import { messages } from "../db";
import expressAsyncHandler from "express-async-handler";

const getNewMessageFormPage = expressAsyncHandler(
  (req: Request, res: Response) => {
    res.render("form");
  }
);

const postNewMessage = expressAsyncHandler((req: Request, res: Response) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

export { getNewMessageFormPage, postNewMessage };
