import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-container"] div').filter({ hasText: 'Login' }).first().click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('password');
  await page.locator('[data-test="login-buton"]').click();



  
});