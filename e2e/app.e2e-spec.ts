import { NgStarterKitPage } from './app.po';

describe('ng-starter-kit App', () => {
  let page: NgStarterKitPage;

  beforeEach(() => {
    page = new NgStarterKitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
