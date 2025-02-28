import { UserCredentials } from "../types/userCredentials";
import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {
    private userNameInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;
    private invalidCredentialsAlert:Locator;

    constructor(page:Page, pagePath:string){
        super(page, pagePath);
        // Define element locators from login Page 
        this.userNameInput =  this.page.locator('[name="username"]');
        this.passwordInput =  this.page.locator('[name="password"]');
        this.loginButton =  this.page.locator('button[type="submit"]');
        this.invalidCredentialsAlert = this.page.getByRole("alert");
    }

    async writeUserName(userName:string){
        await this.fillTextBoxElement(this.userNameInput, userName);
    }

    async writePassword(password:string){
        await this.fillTextBoxElement(this.passwordInput, password);
    }

    async clickOnLogin(){
        await this.clickElement(this.loginButton);
    }

    async isPresentInvalidAlert(){
        await this.invalidCredentialsAlert.waitFor({state:"visible", timeout: 2000 })
        await this.invalidCredentialsAlert.click();
    }


}