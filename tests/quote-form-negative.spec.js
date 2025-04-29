const { test, expect } = require('@playwright/test');

test('Request A Quote - Negative: missing email', async ({ page }) => {
  await page.goto('https://qatest.datasub.com/quote.html');

  await page.fill('input[name="name"]', 'John Doe');
  await page.selectOption('select[name="service"]', { index: 1 });
  await page.fill('textarea[name="message"]', 'This is a test message');

  await page.click('text=Request A Quote');

  // Проверка: поле email должно подсветиться как невалидное
  const emailInput = page.locator('input[name="email"]');
  await expect(emailInput).toHaveJSProperty('validationMessage', 'Please fill out this field.');
});
