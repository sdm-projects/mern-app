export type Role = "admin" | "user";

export interface User {
  firstName: string;
  lastName: string;
  id: string;
  role: string;
  email: string;
  password: string;
}

export interface CreateUser extends Omit<User, "id"> {}
export interface UpdateUser extends Omit<User, "id" | "email" | "password"> {}
