import {test,expect} from '@playwright/test' 

test('First', async({page})=>
{

await page.goto('https://www.youtube.com/watch?v=FZ5NlP1hL9A')
}
)

test ('First1',async({page})=>
{
    await page.goto('https://www.google.com')
})
