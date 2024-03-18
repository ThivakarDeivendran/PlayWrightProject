const {test, expect} = require('@playwright/test')
test('Multiple Locator',async ({page})=>{
        await page.goto('https://demoblaze.com/')
        await page.click("#login2")
        await page.fill("#loginusername","Thivakardeivendran")
        await page.fill("#loginpassword","Thivakar12!@")
        await page.click("//button[text()='Log in']")
        page.waitForSelector("//div[@id='tbodyid']//h4/a")
        const multipleLocators =  await page.$$("//div[@id='tbodyid']//h4/a")
        for(const uniqueLocator of multipleLocators){
            var textContentValue = await uniqueLocator.textContent(uniqueLocator)
            console.log(textContentValue)
        }
        page.close
})