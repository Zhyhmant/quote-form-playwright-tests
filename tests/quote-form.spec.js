const { test, expect } = require('@playwright/test');

test('Request A Quote - Happy Path', async ({ page }) => {
  await page.goto('https://qatest.datasub.com/quote.html', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john.doe@example.com');
  await page.selectOption('select[name="service"]', { index: 1 });
  await page.fill('textarea[name="message"]', 'This is a test message');

  await page.click('text=Request A Quote');

  await expect(page.locator('form')).toBeVisible();
});
