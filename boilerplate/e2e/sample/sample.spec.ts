import { test, expect } from '@playwright/test';

test.describe('Sample page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/sample');
  });

  test('Should have correct metadata and elements', async ({ page }) => {
    await expect(page).toHaveTitle('Vite + React + Boilerplate');
    await expect(page.getByRole('heading', {
      name: 'Sample Page'
    })).toBeVisible();
    await expect(page.getByRole('button', {
      name: 'Increment'
    })).toBeVisible();
  });
});
