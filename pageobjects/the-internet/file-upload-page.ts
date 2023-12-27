import { Locator, Page } from '@playwright/test';

export class FileUpload {
  private readonly page: Page;
  private readonly uploadButton: Locator;
  readonly uploadSuccess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uploadButton = page.locator('#file-submit');
    this.uploadSuccess = page.locator('#uploaded-files');
  }

  async goto(): Promise<void> {
    this.page.setDefaultNavigationTimeout(0);
    await this.page.goto('https://the-internet.herokuapp.com/upload', {
      waitUntil: 'load',
      timeout: 0
    });
  }

  async uploadFile(path: string): Promise<void> {
    await this.page.setInputFiles('#file-upload', path);
    await this.uploadButton.click();
  }
}
