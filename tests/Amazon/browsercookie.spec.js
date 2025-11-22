
import { test, expect, chromium } from '@playwright/test'


test('browser proxy setting', async () => {

    const browser = await chromium.launch({ headless: false })

    const context = await browser.newContext(
        {

            viewport: { width: 1280, height: 720 },
            locale: 'en-US',
            // proxy:{server:'http://myproxy.com:8080'},
            ignoreHTTPSErrors: true
        })

    const page = await context.newPage()

    await context.addCookies(
        [{ name: 'mycookie', value: 'cookie@12345', url: 'https://www.google.com/' }]
    )

    await page.goto('https://www.google.com/')

    const allCookies = await context.cookies()

    console.log('Cookie length:', allCookies.length)
    expect.soft(allCookies.length).toEqual(4)

    for (let cookie of allCookies) {


        console.log("My cookies:", cookie)

        if (cookie.name === 'mycookie') {
            expect.soft(allCookies).toBeDefined()
            expect.soft(cookie.value).toBe('cookie@12345')

        }

    }

    // Clear cookies

    await context.clearCookies()

    const cookiesAfterClear = await context.cookies()

    console.log("Alfter clear:", cookiesAfterClear.length)

    expect(cookiesAfterClear.length).toBe(0)

    await page.waitForTimeout(2000);

    await page.close();
    await context.close()
    await browser.close()

























})