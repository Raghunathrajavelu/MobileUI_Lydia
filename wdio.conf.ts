import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',

    specs: [
        './src/features/**/*.feature'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '12',
        'appium:appPackage': 'org.wikipedia.alpha',
        'appium:appActivity': 'org.wikipedia.main.MainActivity',
        'appium:noReset': false,
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
                address: '127.0.0.1',
                port: 4723
            }
        }]
    ],

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    /**
     * Take a screenshot on failure and store it in errorShots folder
     */
    afterStep: async function (step, scenario, { error }) {
        if (error) {
            const timestamp = new Date().getTime();
            const filepath = `./errorShots/${timestamp}.png`;
            await browser.saveScreenshot(filepath);
        }
    }
};
