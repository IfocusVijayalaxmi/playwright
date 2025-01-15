import {test,expect} from '@playwright/test'

test('kitchenPage', async({page})=>
{
    await page.pause()
    await page.goto('https://kitchen.applitools.com/')
    if(await expect(page.locator('text=The Kitchen')).toBeVisible())
        await page.locator('text=The Kitchen').click()

    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a')
    await page.pause()

    
   
    


}
)