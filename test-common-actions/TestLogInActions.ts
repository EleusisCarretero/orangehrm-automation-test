import { Browser, chromium, Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import config from "../playwright.config";
import { ResultManager } from "../utils/assertions";
import { TestCommonActions } from "./TestCommonActions";


export class TestLoginActions extends TestCommonActions{
    private loginPage: LoginPage;

    constructor(loginPage:LoginPage, result:ResultManager){
        super(result);
        this.loginPage = loginPage;
        
    }

    async stepOpenLoginPage(){
        this.result.checkNoErrors(
            async() =>{
                await this.loginPage.navigate();
            },
            "Check the Login page can be opened successfully"
        )

    }
}