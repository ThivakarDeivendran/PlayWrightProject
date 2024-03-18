import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=facebook&oq=facebook&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIyMzJqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Facebook® Facebook https://www.facebook.com' }).click();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('thivakar');
  await page.getByLabel('Surname').click();
  await page.getByLabel('Surname').fill('deivendran');
  await page.getByLabel('Mobile number or email address').click();
  await page.getByLabel('Mobile number or email address').fill('8098530644');
  await page.getByLabel('New password').click();
  await page.getByLabel('New password').fill('thivakat');
  await page.getByLabel('Day').selectOption('28');
  await page.getByLabel('Year').selectOption('1995');
  await page.getByLabel('Male', { exact: true }).check();
});