import Ajv, { JSONSchemaType, Schema, SchemaObject } from "ajv";
import { CreateUser, UpdateUser, User } from "common/types";

const ajv = new Ajv();

const createUserSchema: JSONSchemaType<CreateUser> = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    role: { type: "string" },
    email: { type: "string" },
  },
  required: ["firstName", "lastName", "email", "role"],
};

export const creteUserValidator = ajv.compile<User>(createUserSchema);

const updateUserSchema: JSONSchemaType<UpdateUser> = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    role: { type: "string" }
  },
  required: ["firstName", "lastName", "role"],
};

export const updateUserValidator = ajv.compile<User>(updateUserSchema);
