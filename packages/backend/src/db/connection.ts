import { Db, MongoClient } from "mongodb";
import env from "../utils/env.utils";

const connectionString = `mongodb://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}`;
const client = new MongoClient(connectionString);

let db: Db | undefined;
export const connectDb = async () => {
  try {
    const con = await client.connect();
    db = await con.db("mern-app");
  } catch (e) {
    console.error(e);
  }
};
const getDb = () => db as Db;
export default getDb;
