const excelJS = require('exceljs');
const { test, expect } = require('@playwright/test');


async function writeExcel(productName, productPrice, change, filePath) {



    const workbook = new excelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet('Sheet1');
    const rowCellNum = await readExcel(worksheet, productName);
    //  Get specific row value
    const row = worksheet.getRow(rowCellNum.row);
    console.log(row.values);
    //  update product name
    const productCell = worksheet.getCell(rowCellNum.row, rowCellNum.column);
    console.log("Product Name: ", productCell.value)
    //  productCell.value=replacetext;

    //  update price
    const PriceCell = worksheet.getCell(rowCellNum.row, rowCellNum.column + change.changeColumn);
    console.log("Product Price: ", PriceCell.value)
    PriceCell.value = productPrice;

    await workbook.xlsx.writeFile(filePath);

    // console.log("Updated Product name: ", productCell.value);
    console.log("Updated Product price: ", PriceCell.value);


}

async function readExcel(worksheet, productName) {

    let rowCellNum = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {


        row.eachCell((cell, colNumber) => {

            if (cell.value === productName) {

                rowCellNum.row = rowNumber;
                rowCellNum.column = colNumber;

                console.log(rowCellNum.row, rowCellNum.column);
            }
        })
    })
    return rowCellNum;

}

test('Download upload file test', async ({ page }) => {

    let productName='Mango';
    let productPrice='750';
    // const filePath = "C:/Users/Dell/Downloads/download.xlsx";

    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Get the actual path where Playwright saved the file
    const filePath = await download.path();

    await writeExcel(productName,productPrice,{ changeRow: 0, changeColumn: 2 },filePath);
    await page.locator("input#fileinput").setInputFiles(filePath);
    const productSearch = page.getByText(productName);
    const productRow = page.getByRole('row').filter({has:productSearch});
   const updatedPrice = await  productRow.locator('#cell-4-undefined').textContent();
    console.log("updated Price :",updatedPrice);
    expect(updatedPrice).toContain(productPrice);

})


