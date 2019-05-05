"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../PageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
let cal = new calculator_1.calculator();
var assert = chai_1.default.assert;
cucumber_1.Given(':I will navigate to {string} site', (string) => __awaiter(this, void 0, void 0, function* () {
    if (string === 'calc') {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield protractor_1.browser.manage().window().maximize;
        //repeater ,  chain locators, And css for identical tags
    }
    else if (string === 'angular page') {
        yield protractor_1.browser.get('https://angular.io/');
        yield protractor_1.browser.manage().window().maximize;
        //repeater ,  chain locators, And css for identical tags
    }
    else if (string === 'posse') {
        yield protractor_1.browser.get('http://posse.com/');
        yield protractor_1.browser.manage().window().maximize;
        //repeater ,  chain locators, And css for identical tags
    }
    else {
        console.log('invalid website');
    }
    //return 'pending';
}));
cucumber_1.When(': I add two number {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield cal.firstDigitBox.sendKeys(string);
    yield cal.SecondDigitBox.sendKeys(string2);
    yield cal.goButton.click();
    //return 'pending';
}));
cucumber_1.Then(': The output displayed as {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield cal.resultTable.getText().then(function (text) {
        console.log(text);
        assert.equal(text, string);
        console.log('test done');
    });
    //return 'pending';
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUdyQywwREFBdUQ7QUFDdkQsZ0RBQXVCO0FBR3ZCLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzNCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFeEIsZ0JBQUssQ0FBQyxtQ0FBbUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBRTNELElBQUcsTUFBTSxLQUFHLE1BQU0sRUFBQztRQUNqQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUN6Qyx3REFBd0Q7S0FDekQ7U0FDSSxJQUFHLE1BQU0sS0FBRyxjQUFjLEVBQUM7UUFDOUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDekMsd0RBQXdEO0tBQ3pEO1NBQ0ksSUFBRyxNQUFNLEtBQUcsT0FBTyxFQUFDO1FBQ3ZCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2QyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ3pDLHdEQUF3RDtLQUN6RDtTQUNHO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ2hDO0lBSUMsbUJBQW1CO0FBQ3JCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMENBQTBDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDekUsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixtQkFBbUI7QUFDckIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQ0FBb0MsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzFELE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU3QixDQUFDLENBQUMsQ0FBQTtJQUNGLG1CQUFtQjtBQUNyQixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=