class TopMenu {
    get rootEl() {
        return $('nav.top-navigation-ui-23')
    }

    menuItem(param) {
        const selectors = {
            services: '[href="/services"]',
            industries: '[href="/industries"]',
            insights: '[href="/insights"]',
            about: '[href="/about"]',
            careers: '[href="/careers"]'
        }
        return this.rootEl.$(selectors[param.toLowerCase()]);
    } 

    get firstItemDescription () {
        return $('top-navigation__flyout-inner-section')
    }

    get menu() {
        return {
            item: (param, page) => this.rootEl.$(`[href="/${page}"]`)
        };
    };
};

export default TopMenu;