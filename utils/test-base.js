const {test} = require('@playwright/test');

exports.customTest =test.extend(
    {
        placeOrderTestdata: {
            email: "sunilpawar2604@outlook.com",
            password: "Tester@1234",
            productToBuy: "iphone 13 pro",
            baseURL: "https://rahulshettyacademy.com/client/",
            countryName: "Cuba",
            countryCode: "cub"


        }
    }
)