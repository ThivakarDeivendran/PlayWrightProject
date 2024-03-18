var {test, expect} = require('@playwright/test')

test('Home Page',async ({page})=>{
      await page.goto(url)
             let pageTitle = page.title()
             Console.log('PageTitle is : ', pageTitle)
        await expect(page).toHaveTitle('') 

})


 
 
 const { test,expect }=require('@playwright/test');
//const { test, expect } = require ('@playwright/test');
// import { test, expect } from '@playwright/test';

 test('Home Page', async ({page})=>{
        await page.goto('https://demoblaze.com/');
        let pageTitlePrint = await page.title();
        console.log('pageTitle is', pageTitlePrint);
         await expect(page).toHaveTitle('STORE');

         var pageUrlPrint =await page.url();
         console.log('PageUrl is ',pageUrlPrint);
         await expect(page).toHaveURL('https://demoblaze.com/');
})
