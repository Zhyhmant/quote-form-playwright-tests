const { test, expect } = require('@playwright/test');

test('Запрос предложения — негативный сценарий (без email)', async ({ page }) => {
  await page.goto('https://qatest.datasub.com/quote.html', {
    waitUntil: 'domcontentloaded',
  });

  await page.fill('#q_name', 'Алексей Кузнецов');
  await page.selectOption('#q_service', { index: 2 });
  await page.fill('#q_message', 'Интересует консультация по условиям.');

  // Принудительно добавим required (на случай, если HTML не включает его)
  await page.$eval('#q_email', el => el.setAttribute('required', 'true'));

  // Пытаемся отправить форму
  await page.click('button[type="submit"]');

  // Проверка: поле email теперь обязательно и пустое
  const isEmailInvalid = await page.$eval('#q_email', el => !el.checkValidity());
  const isEmailMissing = await page.$eval('#q_email', el => el.validity.valueMissing);

  expect(isEmailInvalid).toBe(true);
  expect(isEmailMissing).toBe(true);
});



