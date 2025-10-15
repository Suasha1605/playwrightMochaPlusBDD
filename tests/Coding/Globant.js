const { syncBuiltinESMExports } = require("module");



const str = 'GeeksForGeek';
const Output = 'eGkeFsroeGkes';

const arr = str.split('');
let result = '';
let temp = '';


for (let i = 1; i < arr.length; i = i + 2) {


    result = result + arr[i] + arr[i - 1];



}
if (arr.length % 2 !== 0) {

    result = result + arr[arr.length - 1];
    console.log("Result:", result);
}
else {

    console.log("Result:", result);
}

const num = [1, 12, 1, 3, 1, 1, 5, 0, 37, 1, 2, 1, 46, 0, 0, 22, 0, 20, 1, 1, 35];

num.sort((a, b) => a - b);
console.log("SortedNum:", num);
num.sort((a, b) => b - a);
console.log("SortedNumDesc:", num);


const names = ['John', 'Alice', 'Bob', 'Charlie', 'David'];
names.sort();
console.log("SortedNames:", names);
names.sort((a, b) => b.localeCompare(a));
console.log("SortedNamesDesc:", names);


const a = [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1];
let maxCount = 0;//output=5
let count = 0;
for (let i of a) {

    if (i !== 0) {
        count++;
        if (count > maxCount) {
            maxCount = count;


        }
    }
    else {
        count = 0;
    }
}
console.log("FinalMaxCount:", maxCount);



// write a playwright script to validate list of items after sorting on ui
//https://www.saucedemo.com/
//username: standard_user
//password: secret_sauce
//sort by price low to high
//validate the items are sorted correctly



// test('Sorting', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('#user-name').fill('standard_user');
//     await page.locator('#password').fill('secret_sauce');
//     await page.locator('#login-button').click();
//     await page.locator('select[data-test="product_sort_container"]').selectOption('lohi');
//     const items = await page.locator('.inventory_item_price').allTextContents();
//     const sortedItems = [...items].sort((a, b) => parseFloat(a) - parseFloat(b));
//     expect(items).toEqual(sortedItems);      
