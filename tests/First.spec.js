
const { test, expect } = require('@playwright/test');
test('My First PROGRAM', async({page}) =>{
 await page.goto('https://www.google.com/')
 await expect(page).toHaveTitle('Google')
})