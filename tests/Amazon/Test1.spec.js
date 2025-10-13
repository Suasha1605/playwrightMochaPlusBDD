
// const {test,expect}= require('@playwright/test');

// test('add Home & Kitchen item to cart in amazon',async({page}) => {

// await page.goto('https://www.amazon.in/');

// const todaysDeal =  page.locator('#nav-xshop > ul > li:nth-child(5) > div > a');
// await expect(todaysDeal).toHaveScreenshot('ExpectedTodaysDeal.png');
// await todaysDeal.click();

// const seeMore =  page.locator('//*[@id="DealsGridScrollAnchor"]/div[2]/div[1]/button/a');
// await seeMore.click();

// const HomeKitchen =  page.locator('//*[@id="DealsGridScrollAnchor"]/div[2]/div[1]/div/span[15]/div/label/span/span');
// var text =await HomeKitchen.textContent();
// console.log(text);
// await HomeKitchen.click();

// const firstItem =  page.locator('//*[@id="DealsGridScrollAnchor"]/div[3]/div/div/div[2]/div[1]/div/div/div[1]/div/div/a/div');
// await firstItem.first().click();

// await page.locator('#add-to-cart-button').click();
// // const addToCart =  page.locator('//input[@name="submit.add-to-cart"]');
// // await addToCart.click();

// const successMsg =  page.locator('//*[@id="NATC_MWEB_FULL_PAGE_CONF_MSG_SUCCESS"]/h4');

// var verifyMsg =await successMsg.textContent();

// // console.log(verifyMsg);

// expect(successMsg).toContainText('Added to cart');



// await page.waitForTimeout(5000);


// });


const {test, expect} = require('@playwright/test')

test('Add an item to cart from movie And Tv Deprt', async ({page}) => {
    //open url
    await page.goto('https://www.amazon.com/');
    //click on dismiss
    await page.locator('span.a-button:nth-child(1) > span:nth-child(1) > input:nth-child(1)').click();
    //click on Todaysdeal
const todaysDeal =  page.locator('//*[@id="nav-xshop"]/ul/li[5]/div/a');
await expect(todaysDeal).toHaveScreenshot('ExpectedTodaysDeal.png');
await todaysDeal.click();
    //click on seemore
    await page.locator('//*[@id="DealsGridScrollAnchor"]/div[2]/div[1]/button/a').click();
    //select movieAndTv radio button
    await page.locator('//*[@id="DealsGridScrollAnchor"]/div[2]/div[1]/div/span[19]/div/label/span/span').click();
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