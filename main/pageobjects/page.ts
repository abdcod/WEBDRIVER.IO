import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    open(path: string): Promise<void | WebdriverIO.Request> {
        return browser.url(`https://saucedemo.com`);
    }
}
