import { Router } from "express";
import usersRouter from "./modules/users/routes";

const appRouter = Router();

appRouter.use("/user", usersRouter);

export default appRouter;