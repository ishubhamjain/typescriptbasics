import {Config} from 'protractor'
import { browser} from 'protractor';
import * as reporter from "cucumber-html-reporter"

export let config: Config = {
    directConnect:true,
     // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // To run script without cucumber use below
    //specs: ['typescriptscript.js'],
    capabilities: {
      //  'browserName': 'firefox',
      //    'browserName': 'internet explorer',
        'browserName': 'chrome',
        'marionette': true,
        //shardTestFiles: true,
    },
    // use  SELENIUM_PROMISE_MANAGER: false, if you are using async in your scripts, both can't mix
    SELENIUM_PROMISE_MANAGER: false,
    specs: [
        '../Features/*.feature' // accepts a glob
      ],
          // Run feature file for cucumber use below
    cucumberOpts: {
        // require step definitions
        require: [
          './stepDefination/*.js' // accepts a glob
        ],
        format: 'json:cucumberJSONreport.json',
        //tags:"@tagName",    <- USE it if you need tag
        // strict: true,
        // 'no-colors': true,
      },
      onComplete: () => {
        //var reporter = require('cucumber-html-reporter');
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberJSONreport.json',
          output: './cucumberHTMLreports.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
        };
   
        reporter.generate(options);
      },
      onPrepare: () => {
        setTimeout(() => {
            browser.driver.executeScript<[number, number]>(() => {
                return [
                    window.screen.availWidth,
                    window.screen.availHeight
                ];
            }).then((result: [number, number]) => {
                browser.driver.manage().window().setSize(result[0], result[1]);
               // browser.driver.manage().window().maximize;
            });
        });
    },
      jasmineNodeOpts: {
        showColors: true,
    //    defaultTimeoutInterval: 120000,
    //    includeStackTrace : true,
    //    isVerbose : true,
    //    print: function () {}
    },

}; 