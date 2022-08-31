import axios from "axios";
import { User } from "../../server/models/UserModel";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchUsers = async (): Promise<User[] | []> => {
  const users = await axios.get(`${API_URL}/users`);

  return users.data;
};
