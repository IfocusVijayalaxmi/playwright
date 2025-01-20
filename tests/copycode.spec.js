const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.getByLabel('Searh', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('firefox');

  await page.goto('https://www.google.com/search?q=firefox&sca_esv=e7797bdb7d6c7883&source=hp&ei=GLd_Z6TqCpDR2roPyv32wAw&iflsig=AL9hbdgAAAAAZ3_FKGTXrAbXZm98-r06YIIatbw6oHui&ved=0ahUKEwik1rK8yOiKAxWQqFYBHcq-HcgQ4dUDCBA&uact=5&oq=firefox&gs_lp=Egdnd3Mtd2l6IgdmaXJlZm94MggQABiABBixAzILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABEjOK1C-E1isKXABeACQAQCYAY4BoAGdBaoBAzYuMbgBA8gBAPgBAZgCCKAC2gWoAgrCAgoQABgDGOoCGI8BwgIKEC4YAxjqAhiPAcICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAgsQLhiABBixAxiDAcICBRAuGIAEwgILEC4YgAQYsQMY1ALCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGMkDwgILEAAYgAQYkgMYigXCAhQQLhiABBixAxiDARjHARiOBRivAcICERAuGIAEGMcBGJgFGJoFGK8BwgIOEC4YgAQYxwEYjgUYrwGYAw_xBbWbjg6wO68pkgcDNi4yoAe0RQ&sclient=gws-wiz');

  // ---------------------
  await context.close();
  await browser.close();
})();