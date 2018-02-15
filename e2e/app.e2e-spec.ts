import { HousingAppPage } from './app.po';

describe('housing-app App', () => {
  let page: HousingAppPage;

  beforeEach(() => {
    page = new HousingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
