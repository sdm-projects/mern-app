import dotenv from "dotenv";
import { Env } from "../types/env.type";

dotenv.config({ path: `.env.${process.env.NODE_ENV ?? "development"}` });

const env = process.env as Env;

export default env