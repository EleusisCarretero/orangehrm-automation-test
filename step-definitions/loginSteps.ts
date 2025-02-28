import { format } from "path";
import {Given, When, Then, After, Before} from "@cucumber/cucumber"
import {Page} from "playwright"
import {LoginPage, credentialsRequiresMsgs} from "../pages/loginPage"
import { CustomWorld } from "./worlds";
import { chromium } from 'playwright';
import {test, expect} from "@playwright/test";
import config from "../playwright.config";


Before(async function (this: CustomWorld){
    console.log("Execution before")
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    const loginURL = config.metadata?.baseURL + config.metadata?.loginURL;
    console.log("Login URL: ", loginURL);
    this.logingPage = new LoginPage(this.page, loginURL);

});

Given('the user open the main web page OrangeHRM', async function (this: CustomWorld) {
    // this.browser = await chromium.launch({ headless: false });
    // this.page = await this.browser.newPage();
    // const loginURL = config.metadata?.baseURL + config.metadata?.loginURL;
    // console.log("Login URL: ", loginURL);
    // this.logingPage = new LoginPage(this.page, loginURL);
    this.logingPage.navigate();
    
});

When('enters the {string} in the username field', async function (this: CustomWorld, userName:string) {
    
    if (!this.logingPage) throw new Error("logingPage no está inicializado");
    await this.logingPage.writeUserName(userName);
    
});

When('enters {string} in the password field', async function (this: CustomWorld, password:string) {
    
    if (!this.logingPage) throw new Error("logingPage no está inicializado");
    await this.logingPage.writePassword(password);
    
});

When('presses the "Login" button', async function (this: CustomWorld) {
    
    if (!this.logingPage) throw new Error("logingPage no está inicializado");
    await this.logingPage.clickOnLogin();
    
});

Then('the admin dashboard must be shown', async function (this: CustomWorld) {
    
    const dashboardURL = config.metadata?.baseURL + config.metadata?.dashboardURL;
    console.log("Dashboard URL: ", dashboardURL);
    await this.page.waitForURL(dashboardURL, { timeout: 7000 });

});


Then('the login must be denied', async function (this: CustomWorld) {
    
    console.log("Invalid alert must be present");
    const loginURL = config.metadata?.baseURL + config.metadata?.loginURL;
    console.log("Stay in Login URL: ", loginURL);
    await this.logingPage.isPresentInvalidAlert();
    await this.page.waitForURL(loginURL);

});

Then('the crdentials must be asked', async function (this: CustomWorld) {
    
    console.log("The credentials must be required");
    // Check if the credential fields is empty
    if (await this.logingPage.isUsernameEmpty() && await this.logingPage.isPasswordEmpty()){
        console.log("Username and password are empty");
        let reqMsg = await this.logingPage.credentialsRequiredMsg(credentialsRequiresMsgs.username);
        console.log("Username message: ", reqMsg);
        expect(reqMsg).toBe("Required");
        reqMsg = await this.logingPage.credentialsRequiredMsg(credentialsRequiresMsgs.password);
        console.log("Password message: ", reqMsg);
        expect(reqMsg).toBe("Required");
    }

    if(await this.logingPage.isUsernameEmpty()){
        console.log("Username is empty");
        let reqMsg = await this.logingPage.credentialsRequiredMsg(credentialsRequiresMsgs.justOne);
        console.log("Username message: ", reqMsg);
        expect(reqMsg).toBe("Required");
    }
    if(await this.logingPage.isPasswordEmpty()){
        console.log("Password is empty");
        let reqMsg = await this.logingPage.credentialsRequiredMsg(credentialsRequiresMsgs.justOne);
        console.log("Password message: ", reqMsg);
        expect(reqMsg).toBe("Required");
    }
    const loginURL = config.metadata?.baseURL + config.metadata?.loginURL;
    console.log("Stay in Login URL: ", loginURL);
    await this.page.waitForURL(loginURL);

});



After(async function (this: CustomWorld) {

    if (this.page && !this.page.isClosed()) {
        console.log("Closing page");
        await this.page.close();
    } else {
        console.log("The page is already closed");
    }

    if (this.browser) {
        console.log("Closing browser");
        await this.browser.close();
    }

    console.log("Browser closed");
});




