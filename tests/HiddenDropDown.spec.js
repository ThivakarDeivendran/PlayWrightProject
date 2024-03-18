const { test, expect } =require ('@playwright/test')
test('HiddenDropDown',async({page})=>{
    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(2000)
    await page.fill("//input[@name='username']",'Admin')
    await page.fill("//input[@name='password']","admin123")
    await page.locator("//button[@type='submit']").click();
    await  page.waitForTimeout(5000)
    await page.click("//span[text()='PIM']/parent::a")
    await page.waitForSelector("//label[text()='Job Title']/parent::div/following-sibling::div//i")
    await page.click("//label[text()='Job Title']/parent::div/following-sibling::div//i")

    var options =await page.$$("//label[text()='Job Title']/parent::div/following-sibling::div/div/div[2]/div/span")
    for(let option of options){
            const uniqueOption = await option.textContent()
            console.log(uniqueOption)
            if(uniqueOption.includes('QA Lead')){
                option.click();
            }
    }
     await page.waitForTimeout(10000)   
})