export type Role = "admin" | "user"

export interface User {
    firstName: string;
    lastname: string;
    id: string;
    role: string;
    email: string;
}