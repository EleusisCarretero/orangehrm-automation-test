import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
    protected page:Page;
    private __pagePath:string;

    constructor(page:Page, pagePath:string){
        this.page = page;
        this.__pagePath = pagePath;
    }

    async navigate() {
        await this.page.goto(this.getPagePath);
        // await this.page.waitForLoadState("networkidle");
    }
    // async navigate() {
    //     if (!this.page || this.page.isClosed()) {
    //         console.log("⚠️ No se puede navegar porque la página está cerrada.");
    //         return;
    //     }
    //     await this.page.goto(this.url);
    //     await this.page.waitForLoadState("domcontentloaded");
    // }
    
    

    get getPagePath(){
        return this.__pagePath;
    }

    async fillTextBoxElement(writebleElement:Locator, inputText:string){
        console.log(`Write ${inputText} into ${writebleElement.toString()}`);
        try{
            await writebleElement.waitFor({state: "visible", timeout: 10000});
            await writebleElement.click();
            await writebleElement.fill(inputText);
        }catch(error){
            console.error(`Unable to write ${inputText} inside ${writebleElement.toString()} elemente: `, error);
            throw new Error("The input data couln't be written ");
        }
    }

    async clickElement(clickableElement:Locator){
        console.log(`Click on element ${clickableElement.toString()}`);
        try{
            await clickableElement.waitFor({state: "visible"});
            await clickableElement.click();
        }catch(error){
            console.error(`Unable to performed a click on element ${clickableElement.toString()}:`, error);
            throw new Error("Click was not performe");
        }
    }
}