import { test, expect, chromium } from '@playwright/test'
import path from 'path'

test('file upload', async () => {

    const browser = await chromium.launch({ headless: false, channel: 'chrome' })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })

    const filePath = path.join(__dirname,'..','..', 'Testdata', 'IRF.pdf');

    console.log(filePath)

    await page.locator('input#singleFileInput').setInputFiles(filePath)

    //  await page.setInputFiles('input#singleFileInput','.//Testdata//IRF.pdf')

    await page.getByRole('button', { name: 'Upload Single File' }).click({ button: 'left' })

    const fileDetails = await page.locator('p#singleFileStatus').textContent()

    console.log("fileDetails", fileDetails);

    expect.soft(fileDetails).toContain('IRF.pdf')



})


