import { ElementFinder, element, by } from "protractor";

export class posse{

    placeSearch:ElementFinder;
    locationSearch:ElementFinder;
    testingLocator:ElementFinder;

    constructor(){

        this.placeSearch=element(by.model('userInputQuery'));

    }

    //function 
   disp():ElementFinder { 
    var input = this.locationSearch=element(by.model('locationQuery'));
     return input;
    } 

   testFunction(headings:ElementFinder):ElementFinder{
       let test = this.testingLocator=element(by.model('locationQuery'));
       return test;
   }

}