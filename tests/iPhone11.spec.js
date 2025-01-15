import { test, expect } from '@playwright/test';

test.use({
  colorScheme: 'dark'
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=web&oq=web&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE0OTFqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Web Development Products &' }).click();
});