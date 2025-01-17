import{test,expect} from '@playwright/test'
import { count } from 'console'

test.only('Tables concept',async({page})=>
    {
        // await page.pause()
        await page.goto('https://testautomationpractice.blogspot.com/')
      
        const table=await page.locator('#productTable')

         const column=await table.locator('thead tr th')
         console.log(await column.count())

         const row=await table.locator('tbody tr')
         console.log(await row.count())
    })