import { ApiExample3Page } from './app.po';

describe('api-example3 App', () => {
  let page: ApiExample3Page;

  beforeEach(() => {
    page = new ApiExample3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
