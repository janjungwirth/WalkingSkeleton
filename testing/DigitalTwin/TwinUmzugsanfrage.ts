import { expect, type Locator, type Page } from '@playwright/test';

export class TwinUmzugsanfrage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly date: Locator;
  readonly vonPLZ: Locator;
  readonly zuPLZ: Locator;
  readonly vonStrasse: Locator;
  readonly zuStrasse: Locator;
  readonly vonOrt: Locator;
  readonly zuOrt: Locator;
  readonly amount: Locator;
  readonly absenden: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('Vorname');
    this.lastName = page.getByPlaceholder('Nachname');
    this.date = page.getByPlaceholder('Datum');
    this.vonPLZ = page.getByPlaceholder('vonPLZ');
    this.zuPLZ = page.getByPlaceholder('zuPLZ');
    this.vonStrasse = page.getByPlaceholder('vonStrasse');
    this.zuStrasse = page.getByPlaceholder('zuStrasse');
    this.vonOrt = page.getByPlaceholder('vonOrt');
    this.zuOrt = page.getByPlaceholder('zuOrt');
    this.amount = page.getByPlaceholder('Maenge');
    this.absenden = page.getByPlaceholder('Absenden');

  }

  async goto() {
    await this.page.goto('http://localhost:4200/');
    await expect(this.page).toHaveTitle(/Umzugsanfrage/);
  }

  async fillForm(firstName: string, lastName: string, date: string, vonPlz: string,
                 zuPlz: string, vonStr: string, zuStr: string, vonOrt: string, zuOrt: string, amount: string,  ) {
    await this.page.fill('input[name="firstName"]',firstName);
    await this.page.fill('input[name="lastName"]',lastName);
    await this.page.fill('input[name="date"]',date)
    await this.page.fill('input[name="vonPlz"]',vonPlz);
    await this.page.fill('input[name="zuPlz"]', zuPlz);
    await this.page.fill('input[name="vonStr"]', vonStr);
    await this.page.fill('input[name="zuStr"]', zuStr);
    await this.page.fill('input[name="vonOrt"]',vonOrt);
    await this.page.fill('input[name="zuOrt"]', zuOrt);
    await this.page.fill('input[name="amount"]',amount);
    await this.amount.press('Enter');
    await this.absenden.click();
  }

  async validate_visable(){
    await expect(this.firstName).toBeVisible();
    await expect(this.lastName).toBeVisible();
    await expect(this.date).toBeVisible();
    await expect(this.vonPLZ).toBeVisible();
    await expect(this.zuPLZ).toBeVisible();
    await expect(this.vonOrt).toBeVisible();
    await expect(this.zuOrt).toBeVisible();
    await expect(this.vonStrasse).toBeVisible();
    await expect(this.zuStrasse).toBeVisible();
    await expect(this.amount).toBeVisible();
    await expect(this.absenden).toBeVisible();
  }

  async isPresent(): Promise<boolean> {
    const response = await this.page.request.get('http://localhost:8080/test/present');
    const responseBody = await response.json();
    return responseBody === true;
  }

  async resetDatabase() {
    await this.page.request.post('http://localhost:8080/test/del');
  }
}