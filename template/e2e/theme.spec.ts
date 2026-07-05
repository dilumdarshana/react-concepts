import { test, expect } from '@playwright/test';

test('toggles theme and persists visually', async ({ page }) => {
  await page.goto('/');

  const button = page.getByRole('button', { name: /light|dark/i });

  await expect(button).toHaveText('light');

  await button.click();
  await expect(button).toHaveText('dark');
  await expect(page.locator('html')).toHaveClass('dark');

  await button.click();
  await expect(button).toHaveText('light');
  await expect(page.locator('html')).toHaveClass('light');
});

