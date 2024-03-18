const { test, expect }=require('@playwright/test')

test('BootStrapDropDown',async({page})=>{
        await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")
        await page.waitForTimeout(2000)
        await page.click(".btn-group button")
        await page.waitForTimeout(2000)
        let titleValue = await page.locator(".btn-group button").getAttribute("title")
        console.log("Initial Title value  :", titleValue)

        let allElements = await page.$$("ul>li label")
        console.log("size of the dropdown  " + allElements.length)
        for(var singleElement of allElements){
            let e = await singleElement.textContent()
            if(e.includes('MySQL')){
                await singleElement.click()
            }
        }
        let titleValueAfter = await page.locator(".btn-group button").getAttribute("title")
        console.log("TitleValueUpdate  :" ,titleValueAfter)
        await expect(titleValueAfter.includes('MySQL')).toBeTruthy();
        await page.waitForTimeout(1000)

})