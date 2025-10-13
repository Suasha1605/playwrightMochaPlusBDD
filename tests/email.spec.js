const {test} = require('@playwright/test')

test('composemail', () => {
    //playwright code to composemail
    console.log("ComposeMail")
})
//test.skip('Savemail', () => {
//test.only('Savemail', () => {
test('Savemail', () => {
    //playwright code to Savemail
    console.log("Savemail")
})
test.beforeEach(()=>{
    console.log("openBrower,Enter url,Login")
})
test.afterEach(()=>{
    console.log("Logout,CloseBrowser")
})
test.beforeAll(()=>{
    console.log("...................Start server................")
})
test.afterAll(()=>{
    console.log("--------------shutdown Server--------------------------")
})
test('Deletemail', () => {
    //playwright code to Deletemail
    console.log("Deletemail")
})