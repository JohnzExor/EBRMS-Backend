import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
} from "../controller/UsersController";

export const app = express.Router();

app.get("/", getUsers);
app.post("/", createUser);
app.delete("/:uid", deleteUser);
