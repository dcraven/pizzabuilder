import { PizzaBuilderPage } from './app.po';

describe('pizzabuilder App', () => {
  let page: PizzaBuilderPage;

  beforeEach(() => {
    page = new PizzaBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
