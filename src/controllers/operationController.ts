import { createOperationSchema } from "./../schemas/operationSchema";
import { Request, Response } from "express";
import httpStatus from "http-status";
import * as operationService from "../services/operationService";

export async function create(req: Request, res: Response) {
  const { type, description, price } = req.body;
  const userId = req.userId;

  try {
    const validate = createOperationSchema.validate({
      type,
      description,
      price,
    });
    if (validate.error) {
      return res.status(httpStatus.BAD_REQUEST).send(validate.error.message);
    }

    const operation = await operationService.create({
      description,
      price,
      type,
      userId,
    });

    res.status(httpStatus.CREATED).send(operation);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
