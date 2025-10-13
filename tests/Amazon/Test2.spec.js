const {test, expect} = require('@playwright/test')

test('Add an item to cart from movie And Tv Deprt', async ({page}) => {
    //open url
    await page.goto('https://www.amazon.com/');
    //click on dismiss
    await page.locator('span.a-button:nth-child(1) > span:nth-child(1) > input:nth-child(1)').click();
    //click on Todaysdeal
    const todaysdeal = page.locator('//*[@id="nav-xshop"]/ul/li[1]/div/a')
    await todaysdeal.click();
    //click on seemore
    await page.locator('//*[@id="DealsGridScrollAnchor"]/div[2]/div[1]/button/a').click();
    //select HomeKitchen radio button
    await page.locator('//*[@id="DealsGridScrollAnchor"]/div[2]/div[1]/div/span[15]/div/label/span/span').click();
   // await page.pause();
    //click on first item
    await page.locator('//*[@id="DealsGridScrollAnchor"]/div[3]/div/div/div[2]/div[1]/div/div/div[1]/div/div/a/div').click();
    //click on Add2cart button
    await page.locator('#add-to-cart-button').click();
    //verifysuccessmsg
    var text = await page.locator('//*[@id="NATC_SMART_WAGON_CONF_MSG_SUCCESS"]/h1').textContent();
    console.log("Text = "+text)
    await expect.soft(page.locator('//*[@id="NATC_SMART_WAGON_CONF_MSG_SUCCESS"]/h1')).toContainText('Added to cart')
    //await page.waitForTimeout(5000);
});