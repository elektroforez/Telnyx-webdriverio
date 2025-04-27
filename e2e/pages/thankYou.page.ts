import BasePage from "./base.page";

class ThankYouPage extends BasePage {
  get pageTitle() {
    return $("h1");
  }

  getUrl() {
    return browser.getUrl();
  }

  constructor() {
    super("/thank-you");
  }
}
export default new ThankYouPage();
