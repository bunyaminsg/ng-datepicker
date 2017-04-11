import { NgDatepickerPage } from './app.po';

describe('ng-datepicker App', () => {
  let page: NgDatepickerPage;

  beforeEach(() => {
    page = new NgDatepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
