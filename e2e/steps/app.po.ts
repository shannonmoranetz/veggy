import { browser, by, element, until } from 'protractor';

export class AppPage {

  public navigateTo() {
    // This is the url to go to...
    // Just use '/' if you want your regular localhost
    return browser.get('https://angular.io');
  }

  public enterSearchInput(text: string) {
    return element(by.css('input[aria-label="search"]'))
      .sendKeys(text);
  }

  public getSearchResultItems() {
    const condition = until.elementsLocated(by.css('.search-results .search-result-item'));

    return browser.wait(condition, 5000);
  }

}
