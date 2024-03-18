import { test, expect } from '@playwright/test';

test('SoftAssertionFile',async ({page})=>{
await page.goto('https://demo.nopcommerce.com/register')

await expect(page).toHaveTitle('nopCommerce demo store. Register')

const pageTItle = await page.locator('//title')

await expect.soft(pageTItle).toContainText('nopCommerce')

const newsLetterCheckBox = await page.locator('#Newsletter')
await expect.soft(newsLetterCheckBox).toBeChecked()

const companyTextBox = await page.locator('#Company')
await expect.soft(companyTextBox).toBeEmpty()
await companyTextBox.fill('Testing to be done in the playwright')
await expect.soft(companyTextBox).toHaveValue('Testing to be done in the playwright')

const dayDropDown = await page.locator("select[name='DateOfBirthDay'] option")
await expect.soft(dayDropDown).toHaveCount(32)
})