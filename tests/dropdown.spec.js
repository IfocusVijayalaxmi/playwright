import { test, expect } from '@playwright/test'

test('dropdown', async ({ page }) => {
    // await page.pause()
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    await page.selectOption("id=select-demo", {

    index:5
    })
})
    test.only('multidropdown', async ({ page }) => {
        // await page.pause()
        await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        await page.selectOption("#multi-select", [{
        
            index: 6},
            {index: 2}
    ])
        // await page.pause()


    })