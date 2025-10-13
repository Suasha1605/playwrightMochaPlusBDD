
const { test } = require('@playwright/test')
const { loginUtils } = require('../utils/loginUtils');
const { hrmLoginTest } = require('./loginFixture');



exports.hrmLoginTest = test.extend(

    {
        HRMLoginCred: {

            username: "admin",
            password: "admin123"
        },

        InvalidLoginCred: {

            username: "admin1",
            password: "admin1234"
        }






    }

)


exports.loginTest = hrmLoginTest.extend(
    {
        UILogin: async ({ page, HRMLoginCred }, use) => {

            const loginHelper = new loginUtils(page);

            await loginHelper.getLogin(HRMLoginCred.username, HRMLoginCred.password);

            await use(loginHelper);

        }


    }
)