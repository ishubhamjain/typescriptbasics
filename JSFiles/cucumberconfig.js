"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    directConnect: true,
    // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // To run script without cucumber use below
    //specs: ['typescriptscript.js'],
    capabilities: {
        'browserName': 'firefox',
        //    'browserName': 'internet explorer',
        //  'browserName': 'chrome',
        'marionette': true,
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
                "App Version": "0.3.2",
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
            protractor_1.browser.driver.executeScript(() => {
                return [
                    window.screen.availWidth,
                    window.screen.availHeight
                ];
            }).then((result) => {
                protractor_1.browser.driver.manage().window().setSize(result[0], result[1]);
                // browser.driver.manage().window().maximize;
            });
        });
    },
    jasmineNodeOpts: {
        showColors: true,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSwyQ0FBb0M7QUFDcEMsaUVBQWtEO0FBRXZDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBQyxJQUFJO0lBQ2pCLHVDQUF1QztJQUN4QyxTQUFTLEVBQUUsUUFBUTtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0Qsa0RBQWtEO0lBQ2xELDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsWUFBWSxFQUFFO1FBQ1YsYUFBYSxFQUFFLFNBQVM7UUFDMUIseUNBQXlDO1FBQ3pDLDRCQUE0QjtRQUMxQixZQUFZLEVBQUUsSUFBSTtLQUVyQjtJQUNELCtGQUErRjtJQUMvRix3QkFBd0IsRUFBRSxLQUFLO0lBQy9CLEtBQUssRUFBRTtRQUNILHVCQUF1QixDQUFDLGlCQUFpQjtLQUMxQztJQUNHLDBDQUEwQztJQUNoRCxZQUFZLEVBQUU7UUFDViwyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1AsdUJBQXVCLENBQUMsaUJBQWlCO1NBQzFDO1FBQ0QsTUFBTSxFQUFFLDhCQUE4QjtLQUl2QztJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixtREFBbUQ7UUFDbkQsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLE1BQU0sRUFBRSw0QkFBNEI7WUFDcEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNkLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQW1CLEdBQUcsRUFBRTtnQkFDaEQsT0FBTztvQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVU7b0JBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVztpQkFDNUIsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRTtnQkFDakMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsNkNBQTZDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0MsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FLbkI7Q0FFSixDQUFDIn0=