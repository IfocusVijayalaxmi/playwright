import {test,expect} from '@playwright/test'
const { firefox } = require('playwright');  // Or 'chromium' or 'webkit'.


test('test1' , async()=>
{
    // await page.goto('https://www.google.com/chrome/browser/canary.html')
    
    const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.pause()
  await page.goto('https://www.google.com/chrome/browser/canary.html');
  dumpFrameTree(page.mainFrame(), '');
  await browser.close();

  function dumpFrameTree(frame, indent) {
    console.log(indent + frame.url());
    for (const child of frame.childFrames())
      dumpFrameTree(child, indent + '  ');
  }


})