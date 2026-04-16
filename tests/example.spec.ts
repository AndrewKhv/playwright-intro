import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // const username = page.locator('#username');
  // const email = page.getByPlaceholder('Enter your email');
  // const btn = page.locator('#submit-order')
  //
  // await username.fill('1234')
  // await email.fill('wefwefwefe@mail.rifwef')
  // await expect(btn).toBeEnabled();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  const link = page.getByRole('link', { name: 'Get started' });
  await link.click();

  console.log(123)

  // Expects page to have a heading with the name of Installation.
  const heading = page.locator('[text=fwefqwefqwef]').getByText('fwefqwefqwef').getByRole('heading', { name: 'Installation' })
  await expect(heading).toBeVisible();
});
