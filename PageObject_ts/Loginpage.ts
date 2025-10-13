import {Locator, Page} from '@playwright/test';

export class Loginpage {

   page: Page;
    userEmail: Locator;
    userPassword: Locator;
    loginButton: Locator;
   //  /** @param {import('@playwright/test').Page} page */
    constructor(page:Page){

    this.page =page;
     this.userEmail = page.locator('input#userEmail');
     this.userPassword = page.locator('input#userPassword');
     this.loginButton = page.locator('input[name="login"]');

    }
 async negivateToLoginPage(url: string){

  
    await this.page.goto(url);
 }

   async getLogin(email: string, password: string){

    await this.userEmail.fill(email);
    await this.userPassword.fill(password);
    await this.loginButton.click();
  
    }



 }
 module.exports={Loginpage};