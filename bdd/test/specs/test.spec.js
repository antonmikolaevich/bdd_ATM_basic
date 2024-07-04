import { expect, browser, $ } from '@wdio/globals';

describe('Test suite for mainpage', () => {
    beforeEach(async () => { 
        console.log('Starting a new test...');
        await browser.url('https://www.epam.com/');
    });
    it('Get site title', async () => {
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual('EPAM | Software Engineering & Product Development Services');
    });
    it('Get item from the list', async () => {
        const listOfItemsHeader = await $('.top-navigation__row');
       
        expect(listOfItemsHeader).toHaveText('Careers');
    });
    it('Verify if button has right link', async () => {
        const contactUsButton = await $('/html/body/div/div[2]/div[2]/div[1]/header/div/div/ul/li[1]/a');

        expect(contactUsButton).toHaveLink('https://www.epam.com/about/who-we-are/contact');
    });
    it('Check if button is clickable', async () => {
        const changeLocationButton = await $('//button[@class="location-selector__button"]');

        expect(changeLocationButton).toBeClickable();
    });
    it('check if switcher is clickable', async () => {
        const themeSwitcher = await $('div.header__content > section div.switch');

        expect(themeSwitcher).toBeClickable();
    });
});