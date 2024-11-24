import { ObjectId } from "mongodb";
import db from "../../db/connection";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  let usersCollection = await db().collection("users");
  let results = await usersCollection?.find({}).limit(50).toArray();
  res.send({ users: results }).status(200);
};

export const createUser = async (req: Request, res: Response) => {
  const usersCollection = await db().collection("users");
  const result = await usersCollection.insertOne(req.body);
  res.json({ message: "creating user", obj: result }).status(200);
};

export const getUser = async (req: Request, res: Response) => {
  const usersCollection = await db().collection("users");
  const query = { _id: new ObjectId(req.params.id) };
  const result = await usersCollection.findOne(query);
  if (result) res.json({ data: result }).status(200);
  else res.json({ error: "User not found" }).status(404);
};

export const updateUser = async (req: Request, res: Response) => {
  const usersCollection = await db().collection("users");
  const query = { _id: new ObjectId(req.params.id) };
  const result = await usersCollection.updateOne(query, {$set: req.body});
  if (result) res.json({ data: result }).status(200);
  else res.json({ error: "User not found" }).status(404);
};

export const deleteUser = async (req: Request, res: Response) => {
  const usersCollection = await db().collection("users");
  const query = { _id: new ObjectId(req.params.id) };
  const result = await usersCollection.deleteOne(query);
  if (result) res.json({ message: "deleted" }).status(200);
  else res.json({ error: "User not found" }).status(404);
};
