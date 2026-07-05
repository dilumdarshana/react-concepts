import { test, expect } from '@playwright/test';

test('counter increments, decrements, and resets', async ({ page }) => {
  await page.goto('/counter');

  const display = page.locator('.tabular-nums');

  await page.getByRole('button', { name: '+' }).click();
  await expect(display).toHaveText('1');

  await page.getByRole('button', { name: '+' }).click();
  await expect(display).toHaveText('2');

  await page.getByRole('button', { name: '-' }).click();
  await expect(display).toHaveText('1');

  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(display).toHaveText('0');
});
