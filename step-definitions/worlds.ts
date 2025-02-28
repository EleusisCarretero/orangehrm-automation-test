import { setWorldConstructor, World } from "@cucumber/cucumber";
import {Page, Browser} from "playwright"
import {LoginPage} from "../pages/loginPage"
import { TestLoginActions } from "../test-common-actions/TestLogInActions";

export class CustomWorld extends World{
    browser?: Browser;
    page!: Page;  // the ! helps to indicate that the variable should be initialized before being use
    logingPage!:LoginPage; // Initialize as undefined
    testLoginActions!:TestLoginActions;
}