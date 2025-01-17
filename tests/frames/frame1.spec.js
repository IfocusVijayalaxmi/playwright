import {test,expect} from '@playwright/test'
test('frames handling by name or url',async({page})=>
{
    await page.pause()
   await page.goto('https://ui.vision/demo/webtest/frames/')
   console.log(await page.frames().length)

  const f1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

   await f1.fill('[name="mytext1"]','hello')

   await page.pause()
}) 
 test.only('Approach2 frame locator',async({page})=>
{
    await page.pause()
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const element=page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]')
    element.fill('Hi Hello')
})