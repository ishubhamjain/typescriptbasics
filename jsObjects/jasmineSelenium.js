
var jasminedatasetobj = require("./jasmineDataDrivenData");
var using = require('jasmine-data-provider');

// Run this class from root conf.js, all reports and setting is done

beforeEach(async()=> {
    console.log("before each function");
    await browser.get("https://qaclickacademy.github.io/protocommerce/");
  });

using(jasminedatasetobj.datadrive, function (data, description) {
it('Open NonAngular js website Alerts'+description, async() => {

    element(by.name("name")).sendKeys(data.name);

});

afterEach(function() {
   console.log("after each function");
  });
});
