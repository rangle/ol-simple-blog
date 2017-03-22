import { SimpleBlogPage } from './app.po';

describe('simple-blog App', () => {
  let page: SimpleBlogPage;

  beforeEach(() => {
    page = new SimpleBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
