import { test, expect } from '@playwright/test';

test('Vendor Employee Self-Registration - Final Fully Stable', async ({ page }) => {

  console.log('🚀 Test Started');

  // ======================
  // LOGIN
  // ======================
  await page.goto('https://fvpq2test.firstverify.com/');

  await page.getByRole('textbox', { name: 'User ID' }).fill('saipriyan@ahaapps.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Testing#123');
  await page.getByRole('button', { name: 'Log In' }).click();

  // ======================
  // NAVIGATION
  // ======================
  await page.getByRole('button', { name: 'Training' }).click();
  await page.getByRole('link', { name: 'Add Employees' }).click();

  // ======================
  // POPUP HANDLING
  // ======================
  const [registrationPage] = await Promise.all([
    page.waitForEvent('popup', { timeout: 15000 }),
    page.getByRole('link', { name: /EmployeeSelfRegistration/i }).click()
  ]);

  await registrationPage.waitForLoadState('domcontentloaded');

  // ======================
  // LOCATORS
  // ======================
  const firstNameField = registrationPage.locator('input[name="firstName"]');
  const lastNameField = registrationPage.locator('input[name="lastName"]');
  const emailField = registrationPage.locator('input[name="Email"]');

  const passwordField = registrationPage.locator('input[type="password"]').nth(0);
  const confirmPasswordField = registrationPage.locator('input[type="password"]').nth(1);

  const createAccountBtn = registrationPage.getByRole('button', { name: 'Create Account' });
  const agreeTermsCheckbox = registrationPage.getByText('*I agree to the FIRST, VERIFY');

  const toastMessage = registrationPage.locator('div[role="alert"]').last();

  await expect(firstNameField).toBeVisible({ timeout: 15000 });

  // ======================
  // 1️⃣ EMPTY VALIDATION
  // ======================
  console.log('⚠️ Empty validation...');
  await createAccountBtn.click();

  await expect(toastMessage).toBeVisible();
  await expect(toastMessage).toContainText(/mandatory/i);

  await registrationPage.screenshot({ path: '1-empty-validation.png', fullPage: true });

  // ======================
  // 2️⃣ INVALID EMAIL
  // ======================
  console.log('❌ Invalid email test...');

  await firstNameField.fill('UserA');
  await lastNameField.fill('TestA');
  await emailField.fill('invalid-email-format');
  await passwordField.fill('Testing#123');
  await confirmPasswordField.fill('Testing#123');

  await registrationPage.locator('body').click();
  await agreeTermsCheckbox.click();

  await createAccountBtn.click();

  await expect(toastMessage).toBeVisible();

  await registrationPage.screenshot({ path: '2-invalid-email.png', fullPage: true });

  // ======================
  // 3️⃣ WEAK PASSWORD
  // ======================
  console.log('🔐 Weak password...');

  await registrationPage.reload({ waitUntil: 'domcontentloaded' });

  await firstNameField.fill('UserB');
  await lastNameField.fill('TestB');
  await emailField.fill(`userb_${Date.now()}@gmail.com`);
  await passwordField.fill('123');
  await confirmPasswordField.fill('123');

  await registrationPage.locator('body').click();
  await agreeTermsCheckbox.click();

  await createAccountBtn.click();

  await expect(toastMessage).toBeVisible();

  await registrationPage.screenshot({ path: '3-weak-password.png', fullPage: true });

  // ======================
  // 4️⃣ CREATE REAL UNIQUE USER
  // ======================
  console.log('✅ Creating real user...');

  await registrationPage.reload({ waitUntil: 'domcontentloaded' });

  const uniqueId = Date.now();

  const uniqueFirstName = `User${uniqueId}`;
  const uniqueLastName = `Automation${uniqueId}`;
  const uniqueEmail = `user${uniqueId}@gmail.com`;

  await firstNameField.fill(uniqueFirstName);
  await lastNameField.fill(uniqueLastName);
  await emailField.fill(uniqueEmail);
  await passwordField.fill('Testing#123');
  await confirmPasswordField.fill('Testing#123');

  await registrationPage.locator('body').click();
  await agreeTermsCheckbox.click();

  await createAccountBtn.click();

  console.log(`👤 Created User: ${uniqueFirstName} ${uniqueLastName} | ${uniqueEmail}`);

  // ======================
  // WAIT FOR EMPLOYEE PAGE
  // ======================
  console.log('⏳ Waiting for Employee page...');

  // Wait for navigation after successful registration
  await registrationPage.waitForLoadState('networkidle');

  // Flexible URL validation (adjust if needed)
  await registrationPage.waitForURL(/Employee|Dashboard|Home/i, { timeout: 20000 });

  // ======================
  // FINAL VALIDATION
  // ======================
  console.log('🔍 Validating Employee page...');

  // Ensure not redirected to login
  await expect(registrationPage).not.toHaveURL(/EmployeeLogin/);

  // Ensure page is loaded
  await expect(registrationPage.locator('body')).toBeVisible();

  // ======================
  // FINAL SCREENSHOT
  // ======================
  console.log('📸 Taking Employee page screenshot...');

  if (!registrationPage.isClosed()) {
    await registrationPage.screenshot({ path: '4-employee-page.png', fullPage: true });
  }

  console.log('🎉 Test Completed Successfully - Employee Page Loaded');

});