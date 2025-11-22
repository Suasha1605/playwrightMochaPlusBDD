

import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const baseURL = 'https://restful-booker.herokuapp.com'

 function jsonFileReader(filepath) {

    return JSON.parse(fs.readFileSync(filepath, 'utf-8'))
}


test.only('create token', async ({ request }) => {

    let filepath = path.join(__dirname, '..', '..', 'testdata', 'token_requestbody.json')

    let requestBody = jsonFileReader(filepath)

    const requestOptions={

        data: requestBody,
        headers: { 'Content-Type': 'application/json' },
        
    };

    const token_response = await request.post(`${baseURL}/auth`, requestOptions)

    expect.soft(token_response.ok()).toBeTruthy()
    expect.soft(token_response.status()).toBe(200)

    const token_response_body = await token_response.json()

    console.log('token_response_body:', token_response_body)

    expect.soft(token_response_body).toHaveProperty('token')


})




