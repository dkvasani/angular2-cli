import { DkvasaniPage } from './app.po';

describe('dkvasani App', () => {
  let page: DkvasaniPage;

  beforeEach(() => {
    page = new DkvasaniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
