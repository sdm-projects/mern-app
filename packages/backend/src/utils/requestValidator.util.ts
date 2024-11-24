import Ajv, { Schema, ValidateFunction, ValidationError } from "ajv";
import { NextFunction, Request, Response } from "express";

const ajv = new Ajv();

export const requestBodyValidator =
  <T>(validatorFn: ValidateFunction<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const validationResult = validatorFn(req.body);
      if (validationResult) next();
      else if (validatorFn.errors)
        throw new ValidationError(validatorFn.errors);
      else throw "unknown error occured";
    } catch (e) {
      console.error("Error validating request", e);
      res.status(400).json({ error: e });
    }
  };
