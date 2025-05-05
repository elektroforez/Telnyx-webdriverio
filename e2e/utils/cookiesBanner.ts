import { $ } from "@wdio/globals";

class CookiesBanner {
  private get closeButton() {
    return $("#onetrust-close-btn-container button");
  }

  async closeBanner() {
    const cookieBtn = this.closeButton;

    if (await cookieBtn.isDisplayed()) {
      await cookieBtn.click();
      await cookieBtn.waitForDisplayed({ reverse: true });
    }
  }
}
export default new CookiesBanner();
9