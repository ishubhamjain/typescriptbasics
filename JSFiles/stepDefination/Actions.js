"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const posse_1 = require("../PageObjects/posse");
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
let poss = new posse_1.posse();
cucumber_1.When(': action steps', () => __awaiter(this, void 0, void 0, function* () {
    yield poss.placeSearch.sendKeys('river');
    //  await browser.actions().mouseMove(poss.locationSearch).sendKeys('London').perform();
    //await poss.locationSearch.sendKeys('London');
    // let test = poss.disp().get(1);
    //await browser.actions().mouseMove(test).sendKeys('London');
    yield protractor_1.browser.actions().mouseMove(poss.disp()).sendKeys('London').perform();
    //await browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys('London')).perform();
    yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ARROW_DOWN);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9uL0FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QyxnREFBNkM7QUFDN0MsMkNBQWtEO0FBQ2xELGdEQUFtRDtBQUVuRCxJQUFJLElBQUksR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBQ3ZCLGVBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFTLEVBQUU7SUFDL0IsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyx3RkFBd0Y7SUFDdEYsK0NBQStDO0lBQ2hELGlDQUFpQztJQUNoQyw2REFBNkQ7SUFDN0QsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUUscUdBQXFHO0lBQ3JHLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9