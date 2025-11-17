import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',
    
    specs: [
        './src/features/**/*.feature'
    ],

    maxInstances: 1,

    // **Capabilities for Appium**
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_4_API_31',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'org.wikipedia.alpha',
        'appium:appActivity': 'org.wikipedia.alpha.MainActivity',
        'appium:noReset': true
    }],

    logLevel: 'info',

    framework: 'cucumber',
    cucumberOpts: {
        require: ['./src/step-definitions/**/*.ts'],
        timeout: 60000
    },

    services: [
        ['appium', {
            command: 'appium',
            args: {
                // Optional: change host/port if needed
                address: '127.0.0.1',
                port: 4723
            }
        }]
    ],

    reporters: ['spec'],

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
};
