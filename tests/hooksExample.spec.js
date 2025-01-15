import { test, expect } from '@playwright/test'

test.describe('all the test', () => {



    test.beforeEach(async ({ page }) => {
        // await page.pause()
        await page.goto('https://www.saucedemo.com/')
        await page.locator("id=user-name").fill('standard_user')
        await page.locator("id=password").fill('secret_sauce')
        await page.locator("id=login-button").click()
    })


    test('Add to cart', async ({ page }) => {
        // await page.pause()

        await page.locator("id=add-to-cart-sauce-labs-bike-light").click()
        await page.locator("id=add-to-cart-sauce-labs-onesie").click()

    })

    test('logout', async ({ page }) => {

        await page.locator("id=react-burger-menu-btn").click()
        await page.locator("id=logout_sidebar_link").click()

    })

    
    })
    test.afterEach(async ({ page }) => {
        await page.close()

})

test('excluded group',async({page})=>
{

        await page.goto('https://www.saucedemo.com/')
        await page.locator("id=user-name").fill('standard_user')
        await page.locator("id=password").fill('secret_sauce')
        await page.locator("id=login-button").click()
        await page.locator("id=add-to-cart-sauce-labs-bike-light").click()
        await page.locator("id=add-to-cart-sauce-labs-onesie").click()


})