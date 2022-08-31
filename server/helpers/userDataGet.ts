import { User } from "../models/UserModel";
import users from "../data/users.json";
export const userDataGet = async (): Promise<User[]> => {
  return users;
};
