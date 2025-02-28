import {expect} from "@playwright/test";
export class ResultManager {
    public name:string
    constructor(name:string){
        this.name = name

    }
    _logResult(status:boolean, step_msg:string, details:string=""){
        if (status){
            console.log(`PASSED - ${step_msg}`);
        }
        else{
            console.log(`FAILED - ${step_msg}`);
            if(details){
                console.error(details);
            }
        }

    }

    checkEqualsTo(actualValue:any, expectedValue:any, stepMsg:string){

        try{
            expect(actualValue).toBe(expectedValue);
            this._logResult(true, `PASSED, Assert is Equals - ${stepMsg}`)
        }catch(error){
            let details = `Expected: not ${expectedValue}, but got: ${actualValue}. `;
            if (actualValue!== expectedValue){
                details += `Different types variables, actual_value type ${typeof(actualValue)} != expected_value ${typeof(expectedValue)}`
            }
            this._logResult(false, `Failed, Assert is NOT Equals - ${stepMsg}`)
        }
    }

    checkNoErrors(callbackMethod:CallableFunction,  stepMsg:string){
        try{
            callbackMethod();
            this._logResult(true, `PASSED, Assert is Executed correclty - ${stepMsg}`);
        }catch(error){
            this._logResult(false, `Failed, Assert NOT Executed correclty - ${stepMsg}`);
        }
    }
}