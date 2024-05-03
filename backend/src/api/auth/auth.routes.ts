import express from "express";
import loginHandler from "./login";
import signUpHandler from "./signup";

const authRouter = express.Router();

authRouter.use("/login", loginHandler.V1);
authRouter.use("/sigup", signUpHandler.V1);

export default authRouter;
