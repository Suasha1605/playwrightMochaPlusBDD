
class Loginpage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page){

    this.page =page;
     this.userEmail = page.locator('input#userEmail');
     this.userPassword = page.locator('input#userPassword');
     this.loginButton = page.locator('input[name="login"]');

    }
 async negivateToLoginPage(url){

  
    await this.page.goto(url);
 }

   async getLogin(email, password){

    await this.userEmail.fill(email);
    await this.userPassword.fill(password);
    await this.loginButton.click();
  
    }



 }
 module.exports={Loginpage};