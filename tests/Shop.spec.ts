import {expect, type Locator, test} from "@playwright/test";

test.describe("Shop tests", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://shop.tl-academy.ee/checkout");

    });

    test('TL-16-4 place order button test with delivery check + validation', async ({ page }) => {
        const emailInput = page.getByPlaceholder("Email address");
        const fullNameInput = page.getByTestId("name-input");
        const deliveryMethodParcelCheckbox = page.getByTestId("delivery-parcel-locker-option");
        const deliveryMethodHomeCheckbox = page.getByTestId("delivery-home-option");
        const deliveryCost = page.getByTestId("summary-delivery");
        const totalSum = page.locator("#total");
        const placeOrderBtn = page.locator("button.place");

        await deliveryMethodHomeCheckbox.check();
        await expect(deliveryMethodHomeCheckbox).toBeAttached();
        await expect(deliveryMethodHomeCheckbox).toBeVisible();
    });
});