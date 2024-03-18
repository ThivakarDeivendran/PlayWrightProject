let { test, expect }=require('@playwright/test')

test('dropdownAssertions',async({page})=>{

    await page.goto("https://demoqa.com/select-menu")
    await page.waitForTimeout(4000)
   await page.locator("#oldSelectMenu").selectOption({label : 'White'})
   await page.waitForTimeout(4000)
   await page.locator("//select[@id='oldSelectMenu']").selectOption('Indigo')
   await page.waitForTimeout(4000)
   await page.selectOption("#oldSelectMenu", {value :'4'})
   await page.waitForTimeout(4000)
    await page.selectOption("#oldSelectMenu",{index : 9})
    await page.waitForTimeout(5000)
    let dropdownValues =await page.locator("#oldSelectMenu option")
    await expect.soft(dropdownValues).toHaveCount(11);

    var dropdownvaluesList = await page.$$("#oldSelectMenu option")
    console.log("number of values in dropdown :  ", dropdownvaluesList.length)
    await expect(dropdownvaluesList.length).toBe(11)

    const allValues = await page.locator('#oldSelectMenu').textContent()
    await expect(allValues.includes('Voilet')).toBeTruthy()
    await expect(allValues.includes('pink')).toBeFalsy();

    for(let singleList of dropdownvaluesList){
       let value = await singleList.textContent()
       console.log("print values  : " , value)
       if(value.includes('Black')){
            await page.selectOption("#oldSelectMenu",singleList)
       }
    }

        var zeroCheck = await page.locator("#oldSelectMenu")
        var oneCheck = await page.$$("#oldSelectMenu option")
        const allText = await zeroCheck.textContent()
        console.log(allText)
        await expect(allText.includes('White')).toBeTruthy()
        for(let uniqueCheck of oneCheck){
           let valueCheck = await uniqueCheck.textContent()
           if(valueCheck.includes('Indigo')){
            await page.selectOption("#oldSelectMenu",uniqueCheck)
            break;
           }
        }

        let status = false;
        for(let valueCheck of oneCheck){
            const c = await valueCheck.textContent()
            if( c.includes('Blue')){
                status =true;
                break;
            }
        }
        await expect(status).toBeTruthy();
    await page.waitForTimeout(3000)
})