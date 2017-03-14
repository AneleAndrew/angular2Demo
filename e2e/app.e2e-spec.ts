import { LearningAnguler2AppPage } from './app.po';

describe('learning-anguler2-app App', () => {
  let page: LearningAnguler2AppPage;

  beforeEach(() => {
    page = new LearningAnguler2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
