import { Given, Then, When } from '@cucumber/cucumber';
import { OnboardingPage } from '../pageobjects/onboardingpage';
import { HomePage } from '../pageobjects/homepage';

let onboardingPage: OnboardingPage;
let homePage: HomePage;

Given('the Wikipedia app is launched', async () => {
    onboardingPage = new OnboardingPage(browser);
    homePage = new HomePage(browser);
});

When('I complete onboarding', async () => {
    await onboardingPage.completeOnboarding();
});

When('I search for {string}', async (cityName: string) => {
    await homePage.searchCity(cityName);
});

When('I scroll and select the city {string} and dismiss popup', async (cityName: string) => {
    await homePage.scrollToCityAndDismissPopup(cityName);
});

Then('I change the website language to {string}', async (language: string) => {
    if (language.toLowerCase() === 'french') {
        await homePage.changeLanguageToFrench();
    }
});
