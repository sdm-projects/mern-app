import db from "../../db/connection";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  let usersCollection = await db().collection("users");
  let results = await usersCollection?.find({}).limit(50).toArray();
  res.send({ users: results }).status(200);
};

export const createUser = () => {
  // Todo: code to create user in DB
};

export const getUser = () => {
  // Todo: code to return user by id from DB
};

export const updateUser = () => {
  // Todo: code to update the user in the DB
};

export const deleteUser = () => {
  // Todo: code to delete the user form the DB
};
