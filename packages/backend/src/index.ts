import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV ?? "development"}` });

const app = express();
const port = process.env.PORT || 8000;

app.get("/welcome", (req, res) => {
    res.send("Welcome to the app");
});

app.listen(port, () => {
    console.log(`Server started in  http://localhost:${port}`);
});