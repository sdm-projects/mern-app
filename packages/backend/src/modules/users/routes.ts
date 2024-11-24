import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./controllers";
import { requestBodyValidator } from "../../utils";
import { creteUserValidator, updateUserValidator } from "./validators";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", requestBodyValidator(creteUserValidator), createUser);
usersRouter.get("/:id", getUser);
usersRouter.put("/:id", requestBodyValidator(updateUserValidator), updateUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
