import { Request, Response } from "express";
import { userDataGet } from "../helpers/userDataGet";

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const users = await userDataGet();
  const user = users.find((item) => item.id === id);

  if (!!user) res.status(200).send(user);

  res.status(500).send("Failed to retrieve");
};
