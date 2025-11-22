import { test, expect, chromium } from '@playwright/test'
import path from 'path'
import fs from 'fs'

test('file Download', async () => {

    const browser = await chromium.launch({ headless: false, channel: 'msedge' })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html', { waitUntil: 'load' })



    await page.locator('#inputText').fill('Welcome to Playwright')
    await page.getByRole('button', { name: 'Generate and Download PDF File' }).click({ button: 'left' })
    const [download] = await Promise.all(
        [page.waitForEvent('download'),
        page.getByRole('link', { name: 'Download PDF File' }).click()])

    const downloadFilePath = path.join(__dirname, '..', '..', 'download', 'info.pdf');

    console.log(downloadFilePath)

    await download.saveAs(downloadFilePath)


    expect(fs.existsSync(downloadFilePath)).toBeTruthy();

    if (fs.existsSync(downloadFilePath)) {
        fs.unlinkSync(downloadFilePath)
        console.log('File deleted successfully')
    }


    await page.waitForTimeout(5000)



})


