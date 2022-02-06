import httpStatus from "http-status";
import { registerUserSchema, loginUserSchema } from "./../schemas/userSchema";
import { Request, Response } from "express";
import * as userServices from "../services/userService";

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const validate = registerUserSchema.validate({ name, email, password });

    if (validate.error) {
      return res.status(httpStatus.BAD_REQUEST).send(validate.error.message);
    }
    const user = await userServices.register({ name, email, password });
    delete user.password;

    res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    console.log("Error in server", error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const validate = loginUserSchema.validate({ email, password });

    if (validate.error) {
      return res.status(httpStatus.BAD_REQUEST).send(validate.error.message);
    }
    const user = await userServices.login({ email, password });
    delete user.password;

    res.send(user);
  } catch (error) {
    console.log("Error in server", error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
