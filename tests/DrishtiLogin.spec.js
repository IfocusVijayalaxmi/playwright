import{test,expect} from '@playwright/test'

test('DrishitLoginTest', async({page})=>{


    // await page.pause()
    await page.goto('https://devdrishti.wiztap.in/login')
    // await page.pause()
    await page.locator('id=email').fill('ifocushr@mailinator.com')
    
    await page.locator('id=password').fill('If@123')
    await page.locator('text="Sign in"').click()
    // await expert(page.locator('text="Sign in"')).toHaveCount(2)
    // await page.pause()
    


}
)

test('DrishitLoginTest1', async({page})=>{


    // await page.pause()
    await page.goto('https://devdrishti.wiztap.in/login')
    // await page.pause()
    await page.locator('id=email').fill('ifocushr@mailinator.com')
    
    await page.locator('id=password').fill('If@12345')
    await page.locator('text="Sign in"').click()
    // await expert(page.locator('text="Sign in"')).toHaveCount(2)
    // await page.pause()
}
)