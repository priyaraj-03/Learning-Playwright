import { test, expect } from '@playwright/test';

test('seed - login and land on dashboard', async ({ page }) => {
  await page.goto('https://your-app-url.com/login');

  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Dashboard')).toBeVisible();

  // Save session for reuse
  await page.context().storageState({ path: 'auth.json' });
});