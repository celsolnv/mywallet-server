import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { UserAlreadyExists } from "../errors/UserAlreadyExists";

export function middlewareError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof UserAlreadyExists) {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    message: "Internal Server Error!",
  });
}
