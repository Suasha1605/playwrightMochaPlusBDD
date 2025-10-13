const {test} = require("@playwright/test");


test('context playwright luanch', async ({browser})=>{

     const context = await browser.newContext();

    const page = await context.newPage();

    const url= "https://testautomationpractice.blogspot.com/";

    await page.goto(url);

   const title= await page.title();

    console.log(title);
    await page.close();
    await context.close();

});

test('Page playwright luanch',async ({page})=>{


await page.goto("https://courses.rahulshettyacademy.com/");

await page.close();


});