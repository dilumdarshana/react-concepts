import { test, expect } from '@playwright/test';

test('navigates between pages', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toHaveText('Home');

  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.locator('h1')).toHaveText('About');

  await page.getByRole('link', { name: 'Counter' }).click();
  await expect(page.locator('h1')).toHaveText('Counter');

  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.locator('h1')).toHaveText('Home');
});

test('shows 404 for unknown routes', async ({ page }) => {
  await page.goto('/this-does-not-exist');
  await expect(page.locator('h1')).toHaveText('404');
  await expect(page.getByText('Page not found')).toBeVisible();

  await page.getByRole('link', { name: 'Go home' }).click();
  await expect(page.locator('h1')).toHaveText('Home');
});
