class loginUtils {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });

    }

    async getLogin(userName, passcode) {

        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await this.username.fill(userName);
        await this.password.fill(passcode);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
        console.log("Page Title: ", await this.page.title());
        console.log("<<<<<<<<Login successFul>>>>>>>>>")
    }

}

module.exports = { loginUtils };