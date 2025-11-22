import { test, expect } from '@playwright/test'

test.describe.configure({ mode: 'default', timeout: 40000, retries: 1 })

test.describe('group1', async () => {

    test('test 1', { tag: '@sanity' }, async () => {

        console.log('Test 1.....')
    })

    test.fail('test 2', { tag: '@regression' }, async () => {

        console.log('Test 2.....')
    })

    test('test 6', { tag: '@regression' }, async () => {

        console.log('Test 6.....')
        let value = true
        expect.soft(value).toBeTruthy();
    })



})


test.describe('demo2', async () => {

    test('test 3', { tag: ['@sanity', '@regression'] }, async () => {

        console.log('Test 3.....')
    })


    test.fixme('test 4', { tag: '@regression' }, async () => {

        console.log('Test 4.....')
    })

    test('test 5', { tag: '@regression' }, async () => {

        console.log('Test 5.....')
    })


})

test.describe('demo3', async () => {

    test('test 7', { tag: ['@sanity', '@regression'] }, async () => {

        console.log('Test 7.....')
    })


    // test('test 8', { tag: '@regression' }, async () => {

    //     console.log('Test 8.....')
    //     let value =true
    //     expect.soft(value).toBeFalsy();
    // })

    test('test 9', { tag: '@regression' }, async () => {

        console.log('Test 9.....')
    })


})



