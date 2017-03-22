import { SimpleBlogPage } from './app.po';

describe('simple-blog App', () => {
  let page: SimpleBlogPage;

  beforeEach(() => {
    page = new SimpleBlogPage();
  });

  it('should have the title SimpleBlog', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('SimpleBlog');
  });

  it('should show an edit button by default', () => {
    page.navigateTo();
    expect(page.getBlogEditButton()).toEqual('Edit');
  });

  it('clicking edit should toggle to edit mode', () => {
    page.navigateTo();
    page.clickEditButton();
    expect(page.getBlogSaveButton()).toEqual('Save');
  });
});
