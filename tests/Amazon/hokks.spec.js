import { test } from '@playwright/test'

test.beforeAll('before all', async () => {

    console.log('Before all.....')
})

test.afterAll('before all', async () => {

    console.log('After all.....')
})


test.beforeEach('before each', async () => {

    console.log('Before each.....')
})

test.afterEach('after each', async () => {

    console.log('After each.....')
})


test('test 1', async () => {

    console.log('Test 1.....')
})

test.skip('test 2', async ({browserName}) => {

    test.skip(browserName=='chromium','skip the test if browser is Chrome ')

    console.log('Test 2.....')
})



test.fixme('test 3', async () => {

    console.log('Test 3.....')
})


test.fail('test 4', async () => {

    console.log('Test 4.....')
})




