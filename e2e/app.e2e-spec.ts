import { AddressbookPage } from './app.po';

describe('addressbook App', function() {
  let page: AddressbookPage;

  beforeEach(() => {
    page = new AddressbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
