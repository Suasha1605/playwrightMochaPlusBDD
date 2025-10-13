// HomePage.js
// Page Object for the Home Page

class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.searchInput = 'input[name="search_query"]';
        this.searchButton = 'button[name="submit_search"]';
    }

    async goto() {
        await this.page.goto('http://www.automationpractice.pl/index.php');
    }

    async searchFor(text) {
        await this.page.fill(this.searchInput, text);
        await this.page.click(this.searchButton);
    }
}

module.exports = { HomePage };