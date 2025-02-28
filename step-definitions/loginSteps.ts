import { format } from "path";
import {Given, When, Then, After} from "@cucumber/cucumber"
import {Page} from "playwright"
import {LoginPage} from "../pages/loginPage"
import { CustomWorld } from "./worlds";
import { chromium } from 'playwright';



Given('the user open the main web page OrangeHRM', async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    this.logingPage = new LoginPage(this.page, "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    this.logingPage.navigate();
    
});

When('enters the "Admin" in the "username" field', async function (this: CustomWorld) {
    
    if (!this.logingPage) throw new Error("logingPage no está inicializado");
    await this.logingPage.writeUserName("Admin");
    
});

When('enters "admin123" in the "password" field', async function (this: CustomWorld) {
    
    if (!this.logingPage) throw new Error("logingPage no está inicializado");
    await this.logingPage.writePassword("admin123");
    
});

When('presses the "Login" button', async function (this: CustomWorld) {
    
    if (!this.logingPage) throw new Error("logingPage no está inicializado");
    await this.logingPage.clickOnLogin();
    
});

Then('the admin dashboard must be shown', async function (this: CustomWorld) {
    
    await this.page.waitForURL(
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
        { timeout: 7000 });

});


After(async function (this: CustomWorld) {

    if (this.page && !this.page.isClosed()) {
        console.log("Close page");
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




