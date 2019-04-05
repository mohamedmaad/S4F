import { EmailValidator } from "@angular/forms";

export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    token: string;
}
