import { Locator, Page } from '@playwright/test';

export class FileUpload {
  readonly page: Page;
  readonly uploadButton: Locator;
  readonly dragDropArea: Locator;
  readonly uploadSuccess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uploadButton = page.locator('#file-submit');
    this.dragDropArea = page.locator('.dz-clickable#drag-drop-upload');
    this.uploadSuccess = page.locator('#uploaded-files');
  }

  async goto() {
    this.page.setDefaultNavigationTimeout(0);
    await this.page.goto('https://the-internet.herokuapp.com/upload', {
      waitUntil: 'load',
      timeout: 0
    });
  }

  async uploadFile(path: string) {
    await this.page.setInputFiles('#file-upload', path);
    await this.uploadButton.click();
  }
}
