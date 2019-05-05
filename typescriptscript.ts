import { browser, element, by } from 'protractor';
import { calculator } from './PageObjects/calculator';
import { async } from 'q';


describe('Chain locators demo', () => {

    it('Open Angular js website', async() => {

        let cal = new calculator();
        await browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        await cal.firstDigitBox.sendKeys("3");
        await cal.SecondDigitBox.sendKeys("5");

        await cal.goButton.click();

        cal.resultTable.getText().then(function (text) {

            console.log(text);
            expect(text).toBe('822');
            console.log('test done');
        })

    })



})