
exports.config = {
    directConnect:true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // To run script without cucumber use below
    specs: ['realproject.js'],
   //specs: ['./jsObjects/jasmineSelenium.js'],
    capabilities: {
        //'browserName': 'firefox',
        'browserName': 'chrome',
        'marionette': true
    },
    //SELENIUM_PROMISE_MANAGER: false,
    onPrepare: function() {
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
          })
        );
     },
     suites:{
       // this block for use suite in your jasmine project
       // commnets specs block in this file if you want to use suites , both can't work together
       smoke:['realproject.js','./jsObjects/jasmineSelenium.js'],
       regression:'realproject.js'
     },
     jasmineNodeOpts: {
      showColors: true,
  //    defaultTimeoutInterval: 120000,
  //    includeStackTrace : true,
  //    isVerbose : true,
  //    print: function () {}
  },


}; 