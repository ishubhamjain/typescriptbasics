import {Config} from 'protractor'

export let config: Config = {
    directConnect:true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // To run script without cucumber use below
    specs: ['realproject.js'],
    capabilities: {
        'browserName': 'firefox',
        'marionette': true
    },
    SELENIUM_PROMISE_MANAGER: false,


}; 