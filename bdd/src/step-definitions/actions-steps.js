import { Given } from '@wdio/cucumber-framework';
import page from '../po/pages/main.page.js';
import MainPage from '../po/pages/main.page.js';

const mainPage = new MainPage();

Given('I open {string} page', function(url) {
    return page(mainPage).open();
});

Given('I open {string} page from the menu', async function(url) {
    await browser.url(url)
});