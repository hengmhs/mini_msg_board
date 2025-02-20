import { Request, Response } from "express";
import { getAllMessages } from "../db/queries";
import expressAsyncHandler from "express-async-handler";

const getIndexPage = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const messages = await getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages });
  }
);

export { getIndexPage };
