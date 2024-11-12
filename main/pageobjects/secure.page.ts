import { $ } from '@wdio/globals';
import Page from './page';
import { browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

class SecurePage extends Page {
    get successfulLoginIndicator(): ChainablePromiseElement {
        return $('[data-test="secondary-header"]');
    }

    async verifySuccessfulLogin(): Promise<void> {
        // Ждем, пока URL изменится на страницу, которая должна быть после успешной авторизации (../inventory.html)
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/inventory.html')
        );

        // Теперь на всякий случай ещё ждем отображения одного из элементов внутри авторизованного личного кабинета
        await this.successfulLoginIndicator.waitForDisplayed();
    }
}

export default new SecurePage();
