import { browser } from "protractor";
import { Status } from "cucumber";


var {After, Before,AfterAll, BeforeAll} = require('cucumber');

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

After(async function(scenario) {
  if (scenario.result.status === Status.FAILED) {
      // screenShot is a base-64 encoded PNG
          const screenShot = await browser.takeScreenshot();
          this.attach(screenShot, "image/png");
  }
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