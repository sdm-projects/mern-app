import express from "express";
import appRouter from "./routes";
import { connectDb } from "./db/connection";
import env from "./utils/env.utils";


const app = express();
const port = env.PORT
connectDb();

app.get("/welcome", (req, res) => {
    res.send("Welcome to the app");
});

app.use(appRouter)

app.listen(port, () => {
    console.log(`Server started in  http://localhost:${port}`);
});