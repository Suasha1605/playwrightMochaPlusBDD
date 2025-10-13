const { test } = require('@playwright/test')



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
