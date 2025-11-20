export class ArticlePage {
    constructor(private driver: WebdriverIO.Browser) {}

    get closePopupButton() {
        return this.driver.$('id:org.wikipedia.alpha:id/closeButton');
    }

    get languageButton() {
        return this.driver.$('id:org.wikipedia.alpha:id/page_language');
    }

    get languageSearchButton() {
        return this.driver.$('android=new UiSelector().className("android.widget.Button").instance(1)');
    }

    get languageSearchInput() {
        return this.driver.$('//android.widget.EditText');
    }

    get frenchLanguageOption() {
        return this.driver.$('android=new UiSelector().text("French")');
    }

    get frenchTextValidation() {
        return this.driver.$('android=new UiSelector().textContains("ancien pays d\'asie mineure")');
    }

    get cresusElement() {
        return this.driver.$('android=new UiSelector().textContains("Crésus")');
    }

    get openInNewTabOption() {
        return this.driver.$('id:org.wikipedia.alpha:id/link_preview_secondary_button');
    }

    get cresusPageImage() {
        return this.driver.$('id=org.wikipedia.alpha:id/view_page_header_image');
    }

    async dismissPopup() {
        await this.closePopupButton.click();
    }
}
