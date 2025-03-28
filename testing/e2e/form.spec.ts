// e2e/tests/form.spec.ts
import { test, expect } from '@playwright/test';

test('should fill and submit the form successfully', async ({ page }) => {
    await page.goto('http://localhost:4200');

    // Fill personal data
    await page.getByPlaceholder('Vorname').fill('Jan');
    await page.getByPlaceholder('Nachname').fill('Jungwirth');

    // Fill date
    await page.getByPlaceholder('Datum').fill('2022-12-12');

    // Fill Von address
    await page.getByPlaceholder('vonPLZ').fill('7561');
    await page.getByPlaceholder('vonStrasse').fill('Brunntal 12');
    await page.getByPlaceholder('vonOrt').fill('Heiligenkreuz');

    // Fill Zu address
    await page.getByPlaceholder('zuPLZ').fill('7561');
    await page.getByPlaceholder('zuStrasse').fill('Brunntal 14');
    await page.getByPlaceholder('zuOrt').fill('Heiligenkreuz');

    // Fill amount
    await page.getByPlaceholder('Maenge').fill('freitext');

    // Optional: check packaging
    await page.getByRole('checkbox', { name: 'Verpackung' }).check();

    // Click the submit button
    await page.getByRole('button', { name: 'Absenden' }).click();

    // Optional: check confirmation message if vorhanden
    await expect(page.locator('.success')).toContainText('erfolgreich');

    // Optional: check if fields are cleared
    await expect(page.getByPlaceholder('Vorname')).toHaveValue('Jan');
});
