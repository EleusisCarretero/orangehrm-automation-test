import { ResultManager } from "../utils/assertions";



export class TestCommonActions {
    protected result:ResultManager;
    constructor(result:ResultManager){
        this.result = result;
    }

    // async stepWriteUserName(userName:string){
    //     //1. Write the username succesfully
    //     this.result.checkNoErrors(
    //         async()=>{
    //             await this.loginPage.writeUserName(userName);
    //         },
    //        `Check can be witten the username ${userName}`
    //     )
    //     // 2. Confirm that has been writtem
    //     this.result.checkEqualsTo(
    //         this.loginPage.getUsernameContent(),
    //         userName,
    //         `Check the value from user name is the one previously written ${userName}`
    //     )
    // }

}