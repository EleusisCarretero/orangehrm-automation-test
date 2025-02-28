import { UserCredentials } from "../types/userCredentials";
import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export enum credentialsRequiresMsgs {
    justOne = 0,
    username = 0,
    password = 1,
}

export class LoginPage extends BasePage {
    private userNameInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;
    private invalidCredentialsAlert:Locator;
    private credentialsRequired:Locator;
    // private passwordRequired:Locator;

    constructor(page:Page, pagePath:string){
        super(page, pagePath);
        // Define element locators from login Page 
        this.userNameInput =  this.page.locator('[name="username"]');
        this.passwordInput =  this.page.locator('[name="password"]');
        this.loginButton =  this.page.locator('button[type="submit"]');
        this.invalidCredentialsAlert = this.page.getByRole("alert");
        this.credentialsRequired = this.page.locator('span.oxd-input-field-error-message');
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

    async isUsernameEmpty(){
       
        await this.userNameInput.click();
        let reqMsg = await this.userNameInput.inputValue();
        // await this.page.pause();
        console.log("Message: ", reqMsg);
        return  reqMsg === "";
    }

    async isPasswordEmpty(){
        await this.passwordInput.click();
        let reqMsg = await this.passwordInput.inputValue();
        console.log("Message: ", reqMsg);
        // await this.page.pause();
        return  reqMsg === "";
    }

    async credentialsRequiredMsg(userCredential:credentialsRequiresMsgs){
        
        console.log("credential index: ", userCredential);
        const specificMsg = this.credentialsRequired.nth(userCredential);
        console.log("Specific credentiasl : ", specificMsg);
        await specificMsg.waitFor({state:"visible", timeout: 7000 });
        let text = await specificMsg.textContent();
        console.log("credentials req mesg: ", text);
        return text;
    }


}