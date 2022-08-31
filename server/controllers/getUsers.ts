import { Request, Response } from "express";
import { userDataGet } from "../helpers/userDataGet";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await userDataGet();

  res.status(200).send(users);
};
