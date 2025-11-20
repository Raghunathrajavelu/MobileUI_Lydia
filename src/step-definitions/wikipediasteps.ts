import { Given, When, Then } from '@wdio/cucumber-framework';
import { OnboardingPage } from '../pages/onboardingpage';
import { HomePage } from '../pages/homepage';
import { ArticlePage } from '../pages/articlePage';

let onboarding: OnboardingPage;
let home: HomePage;
let article: ArticlePage;

Given('the user completes onboarding', async () => {
    onboarding = new OnboardingPage(driver);
    await onboarding.completeOnboarding();
});

When('the user searches for Lydia', async () => {
    home = new HomePage(driver);
    await home.searchForLydia();
});

When('the user dismisses the popup', async () => {
    article = new ArticlePage(driver);
    await article.dismissPopup();
});

When('the user changes the language to French', async () => {
    await article.languageButton.click();
    await article.languageSearchButton.click();
    await article.languageSearchInput.setValue('French');
    await article.frenchLanguageOption.click();
});

Then('the page should be translated to French', async () => {
    await expect(article.frenchTextValidation).toBeDisplayed();
});

When('the user scrolls to Crésus and opens it in a new tab', async () => {
    await article.cresusElement.scrollIntoView();
    await article.cresusElement.click();
    await article.openInNewTabOption.click();
});

Then('the Crésus page should be displayed', async () => {
    const pageImage = await article.cresusPageImage;
    await pageImage.waitForDisplayed();
    await expect(pageImage).toBeDisplayed();

});

