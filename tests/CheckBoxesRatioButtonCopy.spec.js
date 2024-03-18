const { test, expect } =require ('@playwright/test')

test('CheckBoxRatioButton',async({page})=>{

     await page.goto("https://www.ironspider.ca/forms/checkradio.htm")
         let multipleLocators =await page.$$("//*[@class='Example']//input")
        for(const singlelocator of multipleLocators){
            singlelocator.check()
            await page.waitForTimeout(2000)
        }

})