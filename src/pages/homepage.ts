import type { Browser, ChainablePromiseElement } from 'webdriverio';

export class HomePage {
    constructor(private driver: WebdriverIO.Browser) {}

    get searchContainer(): ChainablePromiseElement {
        return this.driver.$('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")');
    }

    get searchInput(): ChainablePromiseElement {
        return this.driver.$('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    }

    get lydiaSearchResult(): ChainablePromiseElement {
        return this.driver.$(
            '//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/page_list_item_title" and @text="Lydia"]'
        );
    }

    async searchForLydia() {
        await (await this.searchContainer).click();
        await (await this.searchInput).setValue("Lydia");
    }

    async selectLydiaResult() {
        const result = await this.lydiaSearchResult;
        await result.waitForDisplayed();
        await result.click();
    }
}
