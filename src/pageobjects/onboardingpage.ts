import type { Browser, ChainablePromiseElement } from 'webdriverio';

export class OnboardingPage {
    constructor(private driver: WebdriverIO.Browser) {}

    // Continue button on the onboarding pages
    get continueButton(): ChainablePromiseElement {
        return this.driver.$('id/fragment_onboarding_forward_button');
    }

    // Get Started button on the last onboarding page
    get getStartedButton(): ChainablePromiseElement {
        return this.driver.$('id/fragment_onboarding_done_button');
    }

    // Complete onboarding by clicking continue 3 times then Get Started
    async completeOnboarding() {
        for (let i = 0; i < 3; i++) {
            await (await this.continueButton).click();
        }
        await (await this.getStartedButton).click();
    }
}
