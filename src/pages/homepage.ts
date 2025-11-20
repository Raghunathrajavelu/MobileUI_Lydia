import type { Browser, ChainablePromiseElement } from 'webdriverio';

export class HomePage {
    constructor(private driver: WebdriverIO.Browser) { }

    get searchContainer(): ChainablePromiseElement {
        return this.driver.$(
            'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")'
        );
    }

    get searchInput(): ChainablePromiseElement {
        return this.driver.$(
            'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")'
        );
    }

    get lydiaSearchResult(): ChainablePromiseElement {
        return this.driver.$(
            '//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/page_list_item_title" and @text="Lydia"]'
        );
    }

    async searchForLydia() {
        // click search bar
        await (await this.searchContainer).click();

        // type "Lydia"
        await (await this.searchInput).setValue("Lydia");

        // wait until the specific Lydia result appears
        await (await this.lydiaSearchResult).waitForDisplayed();

        // click on the Lydia result
        await (await this.lydiaSearchResult).click();
    }
}
