import express from "express";
import { getUser } from "./controllers/getUser";
import { getUsers } from "./controllers/getUsers";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users/:id", getUser);
app.get("/users", getUsers);

app.listen(8080, () => {
  console.log("Port open: ", 8080);
});
