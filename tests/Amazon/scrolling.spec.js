
import { test, expect } from '@playwright/test'



test("scrolling in Playwright", async ({ page }) => {


    test.setTimeout(40000)

    await page.goto('https://www.amazon.in/', { waitUntil: 'load' });

    await page.locator('input#twotabsearchtextbox').pressSequentially('Motivational Books', { delay: 100 })

    await page.keyboard.press('Enter')

    await page.waitForLoadState('load')

    const timestamp = Date.now();

    const books = page.locator('div.puis-desktop-list-title-instructions-style h2 span');

    const lastBookName = await books.first().innerText();

    await expect.soft(books.first()).toHaveScreenshot();

    await page.screenshot({ path: `.\\Screenshots\\lastBookName${timestamp}.png`, fullPage: true })



})