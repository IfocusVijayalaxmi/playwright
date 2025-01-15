import{test,expected} from '@playwright/test'

test('selector', async({page})=>
{

    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    // await page.click('id=user-name')
    await page.locator('[name="user-name"]').fill('name')
    // await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()

    // await page.pause()
    

});