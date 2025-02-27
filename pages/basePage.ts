import { Page } from "@playwright/test";

export class BasePage {
    private page:Page;
    private __pagePath:string;

    constructor(page:Page, pagePath:string){
        this.page = page;
        this.__pagePath = pagePath;
    }
    async navigate() {
        await this.page.goto(this.getPagePath);
    }
    get getPagePath(){
        return this.__pagePath;
    }
}