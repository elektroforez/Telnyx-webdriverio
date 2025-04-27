export default class BasePage {
  private url = "/";

  constructor(url: string) {
    this.url = url;
  }

  public open() {
    return browser.url(this.url);
  }

  public getTitle() {
    return browser.getTitle();
  }
}
