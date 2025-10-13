   const {test, expect} =require('@playwright/test')

test('validate count, validatation of an item', async ({page}) => {
  var temp=0;
  var Expcity='Delhi';
    await page.goto('https://www.timesjobs.com/candidate/register.html?pageFlow=TJ_HOME');
  //await page.locator('#curLocation').selectOption('198676')
  var Allcities = page.locator("//select[@id='curLocation']/optgroup/option")
  var totalitems=await Allcities.count();
 console.log("Total cities ="+totalitems);
  
await expect.soft(Allcities).toHaveCount(445);
var firstele = await Allcities.first().textContent();
console.log("First item ="+firstele);
 
var lastele = await Allcities.last().textContent();
console.log("Last item ="+lastele);

console.log("---------------------------------------------------------")
for(let i=0;i<totalitems;i++){
  var item =await Allcities.nth(i).textContent();  
  //console.log(item)
  if(item==Expcity){
    //console.log('Delhi exist')
    temp++;
    break;
  }
}
if(temp==0){
    console.log(Expcity+" does not exists")
}else {
    console.log(Expcity+"  exists")
}
expect.soft(temp>0).toBeTruthy();
await page.waitForTimeout(5000);


})