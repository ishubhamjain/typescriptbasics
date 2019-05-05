import { ElementFinder,element,by } from "protractor";

export class calculator{

    firstDigitBox:ElementFinder;
    SecondDigitBox:ElementFinder;
    goButton:ElementFinder;
    resultTable:ElementFinder;

    constructor(){
        this.firstDigitBox=element(by.model("first"));
        this.SecondDigitBox=element(by.model("second"));
        this.goButton=element(by.id("gobutton"));
        this.resultTable=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }


}