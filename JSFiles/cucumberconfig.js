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
        //  'browserName': 'firefox',
        //    'browserName': 'internet explorer',
        'browserName': 'chrome',
        'marionette': true,
    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSwyQ0FBb0M7QUFDcEMsaUVBQWtEO0FBRXZDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBQyxJQUFJO0lBQ2pCLHVDQUF1QztJQUN4QyxTQUFTLEVBQUUsUUFBUTtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0Qsa0RBQWtEO0lBQ2xELDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsWUFBWSxFQUFFO1FBQ1osNkJBQTZCO1FBQzdCLHlDQUF5QztRQUN2QyxhQUFhLEVBQUUsUUFBUTtRQUN2QixZQUFZLEVBQUUsSUFBSTtLQUVyQjtJQUNELHdCQUF3QixFQUFFLEtBQUs7SUFDL0IsS0FBSyxFQUFFO1FBQ0gsdUJBQXVCLENBQUMsaUJBQWlCO0tBQzFDO0lBQ0csMENBQTBDO0lBQ2hELFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx1QkFBdUIsQ0FBQyxpQkFBaUI7U0FDMUM7UUFDRCxNQUFNLEVBQUUsOEJBQThCO0tBSXZDO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLG1EQUFtRDtRQUNuRCxJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsTUFBTSxFQUFFLDRCQUE0QjtZQUNwQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNGLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLG9CQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBbUIsR0FBRyxFQUFFO2dCQUNoRCxPQUFPO29CQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVTtvQkFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXO2lCQUM1QixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFO2dCQUNqQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSw2Q0FBNkM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDQyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtLQUtuQjtDQUVKLENBQUMifQ==