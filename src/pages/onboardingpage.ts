import type { ChainablePromiseElement } from 'webdriverio';

export class OnboardingPage {
    constructor(private driver: WebdriverIO.Browser) { }

    get continueButton(): ChainablePromiseElement {
        return this.driver.$('id:org.wikipedia.alpha:id/fragment_onboarding_forward_button');
    }

    get getStartedButton(): ChainablePromiseElement {
        return this.driver.$('id:org.wikipedia.alpha:id/fragment_onboarding_done_button');
    }

    async completeOnboarding() {
        for (let i = 0; i < 3; i++) {
            await this.continueButton.click();
        }
        await this.getStartedButton.click();
    }
}
