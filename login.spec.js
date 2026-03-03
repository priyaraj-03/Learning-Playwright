const { test, expect } = require('@playwright/test');

test('Login to FirstVerify application', async ({ page }) => {

  await page.goto('https://fvpq2test.firstverify.com/');

  // Check if page has iframe
  const frame = page.frameLocator('iframe');

await page.getByRole('textbox', { name: 'User ID' }).fill('fvtestingteam@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).fill('Testing#123');
await page.getByRole('button', { name: 'Log In' }).click();

});