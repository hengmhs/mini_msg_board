import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { getSpecificMessage } from "../db/queries";

const getMessagePage = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const message = await getSpecificMessage(Number(id));

    console.log(message);

    res.render("message", { message: message[0] });
  }
);

export { getMessagePage };
