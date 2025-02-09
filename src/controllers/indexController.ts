import { Request, Response } from "express";
import { messages } from "../db";

const getIndexPage = (req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const getNewMessageFormPage = (req: Request, res: Response) => {
  res.render("form");
};

const postNewMessage = (req: Request, res: Response) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
};

export { getIndexPage, getNewMessageFormPage, postNewMessage };
