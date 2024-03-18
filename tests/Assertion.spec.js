const {test, expect} =require('@playwright/test')

test('AssertionFile',async ({page})=>{
await page.goto('https://demo.nopcommerce.com/register')

await expect(page).toHaveTitle('nopCommerce demo store. Register')

// const pageTItle = await page.locator('//title')

// await expect (pageTItle).toContainText('nopCommerce')

const newsLetterCheckBox = await page.locator('#Newsletter')
await expect(newsLetterCheckBox).toBeChecked()

const companyTextBox = await page.locator('#Company')
await expect (companyTextBox).toBeEmpty()
await companyTextBox.fill('Testing to be done in the playwright')
await expect(companyTextBox).toHaveValue('Testing to be done in the playwright')

const dayDropDown = await page.locator("select[name='DateOfBirthDay'] option")
await expect(dayDropDown).toHaveCount(32)
})