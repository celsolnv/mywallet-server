import Joi from "joi";

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(55).required(),
  email: Joi.string().email().min(5).required(),
  password: Joi.string().min(6).required(),
});
export const loginUserSchema = Joi.object({
  email: Joi.string().email().min(5).required(),
  password: Joi.string().min(6).required(),
});
