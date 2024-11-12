import { $ } from '@wdio/globals'
import Page from './page.js';
import { ChainablePromiseElement } from 'webdriverio';


class LoginPage extends Page {


    get inputUsername(): ChainablePromiseElement {
        return $('#user-name');
    }

    get inputPassword(): ChainablePromiseElement {
        return $('#password');
    }

    get btnSubmit(): ChainablePromiseElement {
        return $('input[type="submit"]');
    }

    async login(username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    get errorMessage(): ChainablePromiseElement {
        return $('[data-test="error"]');
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.getText();
    }

    open(): Promise<void | WebdriverIO.Request> {
        return super.open('/inventory.html');
    }
}

export default new LoginPage();
