import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

class LoginPage extends BasePage {
    private userNameInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;

    constructor(page:Page, pagePath:string){
        super(page, pagePath);
        // Define element locators from login Page
        this.userNameInput = this.page.getByRole('textbox', {name: "username"});  // an input is 'textbox'
        this.passwordInput = this.page.getByRole('textbox', {name: "password"});
        this.loginButton = this.page.getByRole('textbox', {name: "username"});  // an input is 'textbox'

    }

}