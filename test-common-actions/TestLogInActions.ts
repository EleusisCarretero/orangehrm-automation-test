import { Browser, chromium, Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import config from "../playwright.config";
import { ResultManager } from "../utils/assertions";
import { TestCommonActions } from "./TestCommonActions";
import { UserCredentialData } from "../types/userCredentials";


export class TestLoginActions extends TestCommonActions{
    public loginPage: LoginPage;

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
    async stepWriteUserCredentials(userCredentialdata:UserCredentialData){
        //1. Write the user credentials succesfully
        const { writeCallback, readCallback, userData} = userCredentialdata;
    
        const writeCredential = this.loginPage[writeCallback as keyof LoginPage] as (data: string) => Promise<void>;
        const readCredential = this.loginPage[readCallback as keyof LoginPage] as () => Promise<string>;
        this.result.checkNoErrors(
            async()=>{
                await writeCredential(userData);
            },
           `Check can be witten the user credential ${userData}`
        )
        // 2. Confirm that the user credential has been writtem
        this.result.checkEqualsTo(
            readCredential,
            userData,
            `Check the value from the corresponding user credential is the one previously written ${userData}`
        )
    }
}