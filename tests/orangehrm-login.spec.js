const { test, expect } = require('@playwright/test');

test('OrangeHRM login and My Actions section verification', async ({ page }) => {
    // 1. Navigate to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Provide Username and Password
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

    // 3. Click on login button
    await page.getByRole('button', { name: 'Login' }).click();

    // 4. Navigate to Dashboard (redundant, but explicit)
    await page.getByRole('link', { name: 'Dashboard' }).click();

    // 5. Verify My Actions section is present
    await expect(page.getByText('My Actions')).toBeVisible();
});
