const {Given, Then} = require('@cucumber/cucumber')

Given('Navigate to application automation practice', async function () {
    await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");

});

Then('Verify alert popup in handled using playwright', async function () {
    this.page.on('dialog', (dialog) => {
        const dialogType = dialog.type();
        console.log("dialogType : ", dialogType);
        const alertMsg = dialog.message();
        console.log("alertMsg : ", alertMsg);
        dialog.accept();
    });

    await this.page.locator("input#alertbtn").click();
    await this.page.locator("input#confirmbtn").click();
    await this.page.getByRole('button', { name: 'Mouse Hover' }).hover();
    console.log("Mouse Hover action completed")
});