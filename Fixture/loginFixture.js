
const { test } = require('@playwright/test')
const { loginUtils } = require('../utils/loginUtils');
const { hrmLoginTest } = require('./HRMtestdataFixture');



exports.loginTest = hrmLoginTest.extend(
    {
        UILogin: async ({ page, HRMLoginCred }, use) => {

            const loginHelper = new loginUtils(page);

            await loginHelper.getLogin(HRMLoginCred.username, HRMLoginCred.password);

            await use(loginHelper);

        }


    }
)