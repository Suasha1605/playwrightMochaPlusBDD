
import {test,expect,chromium} from '@playwright/test'


test('browser proxy setting',async()=>{

 const browser = await chromium.launch({headless:false})

const context = await browser.newContext(
    {

        viewport:{width:1280,height:720},
        locale:'en-US',
        // proxy:{server:'http://myproxy.com:8080'},
        ignoreHTTPSErrors:true
    })
     
    const page = await context.newPage()

    await page.goto('https://expired.badssl.com/')

    await page.waitForTimeout(5000);

    await page.close();
    await context.close()
    await browser.close()

























})