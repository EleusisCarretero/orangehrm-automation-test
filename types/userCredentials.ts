import { LoginPage } from "../pages/loginPage";

export interface UserCredentials {
    username: string;
    password: string;
}

export interface UserCredentialData {
    writeCallback:  keyof LoginPage;
    readCallback:  keyof LoginPage;
    userData: string;
}

