import { Request, Response } from "express";
import { loginV1 } from "./login-v1";

const V1 = async (req: Request, res: Response) => {
  //req and res logic inside here
  const result = await loginV1();
};

export default { V1 };
