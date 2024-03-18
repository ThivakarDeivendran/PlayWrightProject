// const {test, expect } = require ('@playwright/test')

// test('Login Test',async ({page})=>{
// await page.goto('https://demoblaze.com/')
// await page.click('#login2')
// await page.locator("#loginusername").fill('Thivakardeivendran')
// await page.fill('#loginpassword','Thivakar12!@')
// await page.locator("//button[text()='Log in']").click()
// var productStore = await page.locator("//a[@id='nava']")
// await expect(productStore).toBeVisible();
// })



let {test,expect} = require('@playwright/test')
test('locator',async({page})=>{
await page.goto("https://demoblaze.com/")
await page.click("")


})

