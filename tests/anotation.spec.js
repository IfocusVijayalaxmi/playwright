import {test,expect} from '@playwright/test'
test.skip('skipped test', async({page})=>
{

});

test('failed test case',async({page})=>
{
    test.fail();
}
);
test.skip('skip this test', async ({ page }) =>{
    // This test will be skipped
  });
 
 
 
 test('not yet ready', async ({ page }) => {
    test.fail();
  });
 

 test.fixme('test to be fixed', async ({ page }) => {
  });
 

 test('slow test', async ({ page }) =>{
    test.slow();
  });
 

 test('focus this test', async ({ page }) =>{
    // Run only focused tests in the entire project
  });