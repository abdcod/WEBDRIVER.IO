import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js';
import SecurePage from '../../pageobjects/secure.page.js';

interface Pages {
    login: typeof LoginPage;
}

const pages: Pages = {
    login: LoginPage
}

// Общий шаг

Given(/^I am on the login page$/, async () => {
    await pages.login.open();
});


// === ПОЗИТИВНЫЕ ТЕСТЫ ===

When(/^I login with valid username (.+) and password (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});

Then(/^I should be logged in successfully within 10 seconds$/, async () => {
    const loginSuccessful: boolean = await SecurePage.successfulLoginIndicator.isDisplayed();
    await expect(loginSuccessful).toBe(true);
});


// === НЕГАТИВНЫЕ ТЕСТЫ ===

When(/^I login with invalid username (.*) and password (.*)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});

Then(/^I should see an error message saying "(.+)"$/, async (expectedMessage: string) => {
    const errorMessage: string = await LoginPage.getErrorMessage();
    await expect(errorMessage).toBe(expectedMessage);
});





