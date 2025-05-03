import { expect, test } from '@playwright/test';
import { TwinUmzugsanfrage } from '../DigitalTwin/TwinUmzugsanfrage';

test('e2e fill Inn', async ({ page }) => {
  const playwrightDev = new TwinUmzugsanfrage(page);
  await playwrightDev.goto();
  await playwrightDev.validate_visable();
  await playwrightDev.fillForm("test", "test","test","test","test","test","test","test","test","test");
  expect(await playwrightDev.isPresent()).toBe(true);
});

test.beforeEach(async ({ page }) => {
  const playwrightDev = new TwinUmzugsanfrage(page);
  console.log('Before each test');
  await playwrightDev.resetDatabase();
});

test.afterEach(async ({ page }) => {
  const playwrightDev = new TwinUmzugsanfrage(page);
  console.log('After each test');
  await playwrightDev.resetDatabase();
});
