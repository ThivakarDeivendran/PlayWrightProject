let {test,expect} = require('@playwright/test')
test('RatioButtonCheckBox',async({page})=>{
    await page.goto('https://www.ironspider.ca/forms/checkradio.htm')
    await page.waitForTimeout(5000);
    await expect (await page.locator("//input[@value='red']")).toBeVisible()
    await page.locator("//input[@value='red']").check();
    await expect (await page.locator("//input[@value='red']").isChecked()).toBeTruthy();
    
    await expect(await page.locator("//input[@value='green']").isChecked()).toBeFalsy();

    const multipleCheckBox = await page.$$("//input[@type='checkbox']")
    for(let uniqueCheckBox of multipleCheckBox){
        uniqueCheckBox.check();
        await page.waitForTimeout(2000)
    }



})