import { Given, When, Then } from "cucumber";
import { browser } from "protractor";

import { async } from "q";
import { calculator } from "../PageObjects/calculator";
import chai from "chai"


let cal = new calculator();
var assert = chai.assert;

 Given(':I will navigate to {string} site', async (string) => {
       
  if(string==='calc'){
    await browser.get('http://juliemr.github.io/protractor-demo/');
    await browser.manage().window().maximize;
    //repeater ,  chain locators, And css for identical tags
  }
  else if(string==='angular page'){
    await browser.get('https://angular.io/');
    await browser.manage().window().maximize;
    //repeater ,  chain locators, And css for identical tags
  }
  else if(string==='posse'){
    await browser.get('http://posse.com/');
    await browser.manage().window().maximize;
    //repeater ,  chain locators, And css for identical tags
  }
  else{
    console.log('invalid website');
  }
      
  
       
    //return 'pending';
  });

  When(': I add two number {string} and {string}', async (string, string2) => {
    await cal.firstDigitBox.sendKeys(string);
    await cal.SecondDigitBox.sendKeys(string2);
    await cal.goButton.click();
    //return 'pending';
  });

  Then(': The output displayed as {string}', async (string) => {
    await cal.resultTable.getText().then(function (text) {

        console.log(text);

        assert.equal(text, string);
        console.log('test done');

    })
    //return 'pending';
  });

