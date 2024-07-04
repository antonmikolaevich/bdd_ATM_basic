import Url from './../components/topmenu.component.js';

class MainPage {
    constructor(url){
        this.url = new Url();
    }

    async open() {
        await browser.url("https://www.epam.com");
    }
};

export default MainPage;