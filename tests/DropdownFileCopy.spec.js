var { test,expect } = require ('@playwright/test')
test("dropdowncopyFile",async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
    await page.waitForTimeout(2000)
    await page.locator("//div[@rel-title ='Select Country']//select").selectOption({label : 'Germany'})
    await page.waitForTimeout(3000)
    await page.locator("//div[@rel-title ='Select Country']//select").selectOption('Mali')
    await page.waitForTimeout(3000)
    await page.selectOption("//div[@rel-title ='Select Country']//select",{value : 'UGA'})
    await page.waitForTimeout(3000)
    await page.selectOption("//div[@rel-title ='Select Country']//select",{index : 19})
    await page.waitForTimeout(5000)


    const allDropDownOptionList = await page.$$("//select/option")
    const dropDown1 = await page.locator("//div[@rel-title ='Select Country']//select")
    const dropdown2 = await page.locator("//div[@rel-title ='Select Country']//select/option")
    await expect.soft(dropdown2).toHaveCount(249)
    console.log("All values counts in Dropdown  :" , allDropDownOptionList.length)
    await expect.soft(allDropDownOptionList.length).toBe(249)

    for(let singleDropdownOption of allDropDownOptionList){
     const value =  await singleDropdownOption.textContent()
     console.log("country value :  " , value)
     if(value.includes('Zambia')){
        await page.selectOption("//div[@rel-title ='Select Country']//select",singleDropdownOption)
        break;
     }
    }
    let status = false;
    for(const option of allDropDownOptionList){
            const optionValue = await option.textContent()
            if(optionValue.includes({value : 'IND'})){
                status = true;
                break;
            }
    }
    await expect(status).toBeTruthy()
    await page.waitForTimeout(5000)
})