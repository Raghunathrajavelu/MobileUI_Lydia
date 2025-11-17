import type { Browser, ChainablePromiseElement } from 'webdriverio';

export class HomePage {
    constructor(private driver: WebdriverIO.Browser) {}

    // Search input field
    get searchInput(): ChainablePromiseElement {
        return this.driver.$('id/search_container');
    }

    // Result item with city name
    cityResult(cityName: string): ChainablePromiseElement {
        return this.driver.$(`//*[@text="${cityName}"]`);
    }

    // Language selector button
    get languageButton(): ChainablePromiseElement {
        return this.driver.$('id/menu_language_button');
    }

    // Change language to French
    async changeLanguageToFrench() {
        await (await this.languageButton).click();
        const frenchOption = await this.driver.$('//*[@text="Français"]');
        await frenchOption.click();
    }

    // Search for a city
    async searchCity(cityName: string) {
        await (await this.searchInput).click();
        const inputField = await this.driver.$('id/search_src_text');
        await inputField.setValue(cityName);
    }

    // Scroll to city result and dismiss popup
    async scrollToCityAndDismissPopup(cityName: string) {
        const cityElement = await this.cityResult(cityName);
        await cityElement.scrollIntoView();
        const closeButton = await this.driver.$('id/page_close_button');
        if (await closeButton.isDisplayed()) {
            await closeButton.click();
        }
    }
}
