import BasePage from "./base.page";

class Footer extends BasePage {
  get twitterLink() {
    return $('a[href="https://twitter.com/telnyx"]');
  }

  get facebookLink() {
    return $('a[href="https://www.facebook.com/Telnyx/"]');
  }

  get linkedinLink() {
    return $('a[href="https://www.linkedin.com/company/telnyx/"]');
  }

  constructor() {
    super("");
  }

  async clickTwitterLink() {
    await this.twitterLink.waitForClickable();
    await this.twitterLink.click();
  }

  async clickFacebookLink() {
    await this.facebookLink.waitForClickable();
    await this.facebookLink.click();
  }

  async clickLinkedinLink() {
    await this.linkedinLink.waitForClickable();
    await this.linkedinLink.click();
  }
}
export default new Footer();
