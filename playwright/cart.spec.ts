import { expect, test } from '@playwright/test';

test('cart test', async ({ page }) => {
  // Add to cart test
  await page.goto('http://localhost:3000/products/4');

  // Check if quantity feld exists and its value is 1
  await page.getByTestId('product-quantity').click();
  await expect(page.getByTestId('product-quantity')).toHaveValue('1');

  // Add quantity in the field, check if value of quantity have changed
  await page.getByTestId('product-quantity').fill('3');
  await expect(page.getByTestId('product-quantity')).toHaveValue('3');

  // Click on the cart button, check if value of quantity in the cart have changed
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-link').getByText('3')).toBeVisible();

  // Click and go to Products page
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Click on another product link
  await page.getByRole('link', { name: 'ReverieRealm' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // Click on the cart button, check if value of quantity in the cart have changed
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-link').getByText('4')).toBeVisible();

  // Click on cart link
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Check for the remove button and expect 2 items in the cart
  await expect(
    page.locator('[data-test-id^="cart-product-remove-"]'),
  ).toHaveCount(2);

  // await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible;
  // await page.getByRole('button', { name: 'Remove' }).click();   ---- strict mode violation: getByRole('button', { name: 'Remove' }) resolved to 2 elements!

  // await page
  //   .getByTestId('cart-product-<product id>')
  //   .locator('div')
  //   .filter({ hasText: 'Name: ReverieRealmPrice: 50Subtotal price: 50-1+' });
  // await expect(page.getByTestId('cart-link')).toContainText('3');     // ------- Expected string: "3" Received string: "  4"
});
