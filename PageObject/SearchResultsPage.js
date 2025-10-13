// SearchResultsPage.js
// Page Object for the Search Results Page

class SearchResultsPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.productList = '.product_list';
        this.productNameSelector = '.product_list .product-name';
    }

    async isProductVisible(productName) {
        const productNames = await this.page.$$eval(this.productNameSelector, els => els.map(e => e.textContent.trim()));
        return productNames.includes(productName);
    }
}

module.exports = { SearchResultsPage };