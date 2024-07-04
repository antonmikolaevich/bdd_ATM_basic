import { Then } from '@wdio/cucumber-framework';
import compareText from './utils/compare-text.js';


Then('Page title should {string} {string}', async function(shouldBeParameter, titleText) {
    const pageTitle  = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter);
});