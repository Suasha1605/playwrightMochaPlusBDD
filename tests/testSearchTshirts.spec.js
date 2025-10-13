// testSearchTshirts.spec.js
// Sample test using the POM for the given scenario

const { test, expect } = require('@playwright/test');
const { HomePage } = require('../PageObject/HomePage');
const { SearchResultsPage } = require('../PageObject/SearchResultsPage');

test('Search for T-shirts and verify product', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    await homePage.goto();
    await homePage.searchFor('T-shirts');

    const isVisible = await searchResultsPage.isProductVisible('Faded Short Sleeve T-shirts');
    expect(isVisible).toBeTruthy();
});
