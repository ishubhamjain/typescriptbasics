import { When, Given } from "cucumber";
import { posse } from "../PageObjects/posse";
import { element, browser, by } from "protractor";
import { protractor } from "protractor/built/ptor";

let poss = new posse();
When(': action steps', async () => {
   await poss.placeSearch.sendKeys('river');
 //  await browser.actions().mouseMove(poss.locationSearch).sendKeys('London').perform();
   //await poss.locationSearch.sendKeys('London');
  // let test = poss.disp().get(1);
   //await browser.actions().mouseMove(test).sendKeys('London');
   await browser.actions().mouseMove(poss.disp()).sendKeys('London').perform();
   //await browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys('London')).perform();
   await browser.actions().sendKeys(protractor.Key.ARROW_DOWN);
  });





