import { test, expect } from '@playwright/test';

test('e2e fill Inn', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await expect(page).toHaveTitle(/Umzugsanfrage/);

  const firstName = page.getByPlaceholder('Vorname');
  await firstName.fill('John');
  await firstName.press('Enter');

  const lastName = page.getByPlaceholder('Nachname');
  await lastName.fill('Jones');
  await lastName.press('Enter');

  const date = page.getByPlaceholder('Datum');
  await date.fill('12.12.2022');
  await date.press('Enter');

  const vonPLZ = page.getByPlaceholder('vonPLZ');
  await vonPLZ.fill('7561');
  await vonPLZ.press('Enter');

  const zuPLZ = page.getByPlaceholder('zuPLZ');
  await zuPLZ.fill('7562');
  await zuPLZ.press('Enter');

  const vonStrasse = page.getByPlaceholder('vonStrasse');
  await vonStrasse.fill('Brunntal');
  await vonStrasse.press('Enter');

  const zuStrasse = page.getByPlaceholder('zuStrasse');
  await zuStrasse.fill('Talbrunn');
  await zuStrasse.press('Enter');

  const vonOrt = page.getByPlaceholder('vonOrt');
  await vonOrt.fill('Heiligenkreuz');
  await vonOrt.press('Enter');

  const zuOrt = page.getByPlaceholder('zuOrt');
  await zuOrt.fill('Kreuzheiligen');
  await zuOrt.press('Enter');

  const amount = page.getByPlaceholder('Maenge');
  await amount.fill('20 Kisten');
  await amount.press('Enter');

  const absenden = page.getByPlaceholder('Absenden');
  await absenden.click();

});

