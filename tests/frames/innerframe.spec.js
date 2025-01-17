import {test,expect} from '@playwright/test'
test('inner frame locator',async({page})=>
    {
        
        await page.goto('https://ui.vision/demo/webtest/frames/')
        const frame1 =page.frameLocator('frame[src="frame_3.html"]')
        const frame2=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
        const child=frame2.childFrames()
        await child[0].locator('xpath=(//div[@class="vd3tt"]/div)[1]').check()

        await page.pause()

        


    })