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
const cucumber_1 = require("cucumber");
var { After, Before, AfterAll, BeforeAll } = require('cucumber');
// Before(function () {
//    // browser.manage().window().maximize;
//    browser.driver.manage().window().maximize;
//     console.log('I am in before hook');
//   });
//   After(function(scenarioResult) {
//     let self = this;
//     if (scenarioResult.result.status === Status.FAILED) {
//     return browser.takeScreenshot()
//     .then(function (screenshot) {
//         const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
//         self.attach(decodedImage, 'image/png');
//     });
// }
// });
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            // screenShot is a base-64 encoded PNG
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
    });
});
//   After(async function (scenario) {
//     console.log('I am in After hook');
//     if (scenario.result.status === Status.FAILED) {
//         const screenshot = browser.takeScreenshot();
//         this.attach(screenshot,"image/png");
//         console.log('Screenshot taken');
//     }
//   });
//   Before({tags: "@foo"}, function () {
//     // This hook will be executed before scenarios tagged with @foo
//   });
//   Before({tags: "@foo and @bar"}, function () {
//     // This hook will be executed before scenarios tagged with @foo and @bar
//   });
//   Before({tags: "@foo or @bar"}, function () {
//     // This hook will be executed before scenarios tagged with @foo or @bar
//   });
//   // You can use the following shorthand when only specifying tags
//   Before("@foo", function () {
//     // This hook will be executed before scenarios tagged with @foo
//   });
///////////////////////////////////////////////////////
// Synchronous
// BeforeAll(function () {
//     console.log('I am in before All hook');
//   });
// //   // Asynchronous Callback
// //   BeforeAll(function (callback) {
// //     // perform some shared setup
// //     // execute the callback (optionally passing an error when done)
// //   });
//   // Asynchronous Promise
//   AfterAll(function () {
//     console.log('I am in After All hook');
//     return Promise.resolve()
//   });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHVDQUFrQztBQUdsQyxJQUFJLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTlELHVCQUF1QjtBQUN2Qiw0Q0FBNEM7QUFDNUMsZ0RBQWdEO0FBQ2hELDBDQUEwQztBQUMxQyxRQUFRO0FBRVIscUNBQXFDO0FBQ3JDLHVCQUF1QjtBQUN2Qiw0REFBNEQ7QUFDNUQsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyx5R0FBeUc7QUFDekcsa0RBQWtEO0FBQ2xELFVBQVU7QUFDVixJQUFJO0FBQ0osTUFBTTtBQUVOLEtBQUssQ0FBQyxVQUFlLFFBQVE7O1FBQzNCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssaUJBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDMUMsc0NBQXNDO1lBQ2xDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxzQ0FBc0M7QUFDdEMseUNBQXlDO0FBQ3pDLHNEQUFzRDtBQUV0RCx1REFBdUQ7QUFDdkQsK0NBQStDO0FBQy9DLDJDQUEyQztBQUMzQyxRQUFRO0FBQ1IsUUFBUTtBQUVSLHlDQUF5QztBQUN6QyxzRUFBc0U7QUFDdEUsUUFBUTtBQUVSLGtEQUFrRDtBQUNsRCwrRUFBK0U7QUFDL0UsUUFBUTtBQUVSLGlEQUFpRDtBQUNqRCw4RUFBOEU7QUFDOUUsUUFBUTtBQUVSLHFFQUFxRTtBQUNyRSxpQ0FBaUM7QUFDakMsc0VBQXNFO0FBQ3RFLFFBQVE7QUFHUix1REFBdUQ7QUFHdkQsY0FBYztBQUNkLDBCQUEwQjtBQUMxQiw4Q0FBOEM7QUFDOUMsUUFBUTtBQUVSLGdDQUFnQztBQUNoQyx1Q0FBdUM7QUFDdkMsc0NBQXNDO0FBRXRDLHlFQUF5RTtBQUN6RSxXQUFXO0FBRVgsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQiw2Q0FBNkM7QUFDN0MsK0JBQStCO0FBQy9CLFFBQVEifQ==