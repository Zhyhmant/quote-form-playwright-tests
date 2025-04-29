const { test, expect } = require('@playwright/test');

test('Запрос предложения — позитивный сценарий', async ({ page }) => {
  await page.goto('https://qatest.datasub.com/quote.html', {
    waitUntil: 'domcontentloaded'
  });

  await page.fill('#q_name', 'Алексей Кузнецов');
  await page.fill('#q_email', 'kuznetsov@example.com');
  await page.selectOption('#q_service', { index: 1 });
  await page.fill('#q_message', 'Здравствуйте! Подскажите, какие есть тарифы?');
  await page.click('button[type="submit"]');

});
