
const { test } = require('@playwright/test');

const playwright = require('playwright');

// const dotenv = require('dotenv')

// dotenv.config({ path: `./ENV/.env.${process.env.ENV}`, override: true });




test("env demo", async () => {

    console.log(process.env.base_url);

    if (!process.env.username) {
        console.error("⚠️ Username not loaded from .env");
    } else {
        console.log("✅ Loaded username:", process.env.username);
    }

    if (!process.env.password) {
        console.error("⚠️ Password not loaded from .env");
    } else {
        console.log("✅ Loaded Password:", process.env.password);
    }



});