import { browser, element, by } from 'protractor';

export class SimpleBlogPage {
  static selectButton(buttonName: string) {
    return element(by.css(`button[data-e2e-button="${buttonName}"]`));
  }

  navigateTo() {
    return browser.get('/');
  }

  clickEditButton() {
    return SimpleBlogPage.selectButton('blog-edit').click();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTitle() {
    return browser.getTitle();
  }

  getBlogSaveButton() {
    return SimpleBlogPage.selectButton('blog-save').getText();
  }

  getBlogEditButton() {
    return SimpleBlogPage.selectButton('blog-edit').getText();
  }
}
