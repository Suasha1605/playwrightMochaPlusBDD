import {test as baseTest} from '@playwright/test';


interface PlaceOrderTestdata {
    email: string;
    password: string;
    productToBuy: string;
    baseURL: string;
    countryName: string;
    countryCode: string;
}
export const customTest =baseTest.extend<{placeOrderTestdata: PlaceOrderTestdata}>(
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