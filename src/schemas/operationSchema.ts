import Joi from "joi";

export const createOperationSchema = Joi.object({
  description: Joi.string().min(3).required(),
  price: Joi.number().required(),
  type: Joi.string().valid("input", "output").required(),
});
