import {test, expect} from '@playwright/test'

test('file upload',async({page})=>{


    await page.goto('url')

    await page.locator('input#id').setInputFiles('filepath')

    await page.locator('.upload').click();

    const [download]=await Promise.all([page.waitForEvent('download'),page.locator('.download').click()])

    await download.saveAs('downpath')



    const loc = page.locator('button.newpage')

    const [newPage]=await Promise.all([

        context.waitForEvent('page'),loc.click()
    ])

   expect(await newPage.title()).toHaveTitle('payment')

})


for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
 0,1,2


let str = 'a1b2c3d4'
//   Output: d1c2b3a4

let arr = str.split('');

let letters = arr.filter(ch=>isNaN(ch))
let chart =letters.toReversed()
let index=0;
let rev='';

for(let i=0; i<arr.length;i++){

    if(isNaN(arr[i])){

       rev=rev+chart[index++]
    }
    else{

        rev=rev+arr[i]
    }


}

console.log("Output: ",rev)
 




