import { UserCredentials } from "../types/userCredentials";
import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {
    private userNameInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;

    constructor(page:Page, pagePath:string){
        super(page, pagePath);
        // Define element locators from login Page
        this.userNameInput =  this.page.locator('[name="username"]');
        this.passwordInput =  this.page.locator('[name="password"]');
        this.loginButton =  this.page.locator('button[type="submit"]');
    }

    // async tryLogin(userCredentials:UserCredentials){
    //     // fill user nada credentials
    //     this.fillTextBoxElement(this.userNameInput, userCredentials.username);
    //     this.fillTextBoxElement(this.passwordInput, userCredentials.password);
    //     // click on loginButton
    //     this.clickElement(this.loginButton);
    // }
    async writeUserName(userName:string){
        this.fillTextBoxElement(this.userNameInput, userName);
    }

    async writePassword(password:string){
        this.fillTextBoxElement(this.passwordInput, password);
    }

    async clickOnLogin(){
        this.clickElement(this.loginButton);
    }


}