const { base } = require('@faker-js/faker');
const { test, expect } = require('@playwright/test');
const fs = require('fs');

async function readFilepath(filepath) {

    return JSON.parse(fs.readFileSync(filepath, 'utf-8'))
}

const baseURL = "https://restful-booker.herokuapp.com";

let token;
let bookingId;

test('Put Request', async ({ request }) => {

    const tokenresponse = await request.post(`${baseURL}/auth`,
        {
            data: await readFilepath('./Testdata/token_requestbody.json')

        }
    );
    console.log('response:', tokenresponse);

    const responseBody = await tokenresponse.json();

    token = responseBody.token;

    console.log('Token:', token);
    expect.soft(tokenresponse.status()).toBe(200);


    //post request
    const postresponse = await request.post(`${baseURL}/booking`,
        {
            data: await readFilepath('./Testdata/post_requestbody.json'),

            headers: { 'Content-Type': 'application/json', 'cookie': `token=${token}` }
        }
    )

    const postresponseBody = await postresponse.json();

    console.log('Post Response Body:', postresponseBody);

    bookingId = postresponseBody.bookingid;
    console.log("Booking ID: ", bookingId);
    expect.soft(postresponse.status()).toBe(200);

    //put request
    const putresponse = await request.put(`${baseURL}/booking/${bookingId}`,
        {
            data: await readFilepath('./Testdata/put_requestbody.json'),
            headers: { 'Content-Type': 'application/json', 'cookie': `token=${token}` }
        }
    );

    const putresponseBody = await putresponse.json();

    console.log('Put Response Body:', putresponseBody);

    expect.soft(putresponse.status()).toBe(200);

    expect.soft(putresponseBody).toHaveProperty('firstname', 'Sunil');


    //GET request
    const getresponse = await request.get(`${baseURL}/booking/${bookingId}`);

    const getresponseBody = await getresponse.json();

    console.log('Get Response Body:', getresponseBody);

    expect.soft(getresponse.status()).toBe(200);
    expect.soft(getresponseBody).toHaveProperty('firstname', 'Sunil');
    expect.soft(getresponseBody).toMatchObject({

        firstname: 'Sunil',
        lastname: 'Pawar',
        totalprice: 10000,
        depositpaid: false,
        bookingdates: { checkin: '2025-10-26', checkout: '2025-11-02' },
        additionalneeds: 'Coffee'
    });

    //Delete Request
    const deleteResponse = await request.delete(`${baseURL}/booking/${bookingId}`, {
        headers: { 'Content-Type': 'application/json', 'cookie': `token=${token}` }
    });



    console.log('Delete response body', await deleteResponse.text());
    expect.soft(deleteResponse.status()).toBe(201);
    expect.soft(deleteResponse.statusText()).toBe('Created');

});

