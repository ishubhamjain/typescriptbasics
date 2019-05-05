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
const protractor_1 = require("protractor");
const calculator_1 = require("./PageObjects/calculator");
describe('Chain locators demo', () => {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let cal = new calculator_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        yield cal.firstDigitBox.sendKeys("3");
        yield cal.SecondDigitBox.sendKeys("5");
        yield cal.goButton.click();
        cal.resultTable.getText().then(function (text) {
            console.log(text);
            expect(text).toBe('822');
            console.log('test done');
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdHNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3R5cGVzY3JpcHRzY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUNsRCx5REFBc0Q7QUFJdEQsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtJQUVqQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBUSxFQUFFO1FBRXBDLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzNCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUMvRCx3REFBd0Q7UUFDeEQsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQixHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBSU4sQ0FBQyxDQUFDLENBQUEifQ==