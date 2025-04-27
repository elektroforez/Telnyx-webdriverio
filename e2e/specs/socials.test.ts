import footer from "../pages/footer.page";
import cookies from "../utils/cookiesBanner";

const linkedinUrl = "https://www.linkedin.com";
const twitterUrl = "https://x.com";
const facebookUrl = "https://www.facebook.com";

describe("Test social links", () => {
  beforeEach(async () => {
    await footer.open();
    await cookies.closeBanner();
  });
  it("Redirect on Linkedin link in footer TX-TC-19", async () => {
    const oldTabs = await browser.getWindowHandles();
    await footer.clickLinkedinLink();
    const newTabs = await browser.getWindowHandles();
    const newTab = newTabs.find((tab) => !oldTabs.includes(tab));

    if (!newTab) {
      throw new Error("No new tabs were opened");
    }

    await browser.switchToWindow(newTab);

    await browser.waitUntil(
      async () => (await browser.getUrl()) !== "about:blank",
      { timeout: 10000, timeoutMsg: "New URL did not load" }
    );

    expect(await browser.getUrl()).toContain(linkedinUrl);

    await browser.closeWindow();
  });
  it("Redirect on Facebook link in footer TX-TC-20", async () => {
    const oldTabs = await browser.getWindowHandles();
    await footer.clickFacebookLink();
    const newTabs = await browser.getWindowHandles();
    const newTab = newTabs.find((tab) => !oldTabs.includes(tab));

    if (!newTab) {
      throw new Error("No new tabs were opened");
    }

    await browser.switchToWindow(newTab);

    await browser.waitUntil(
      async () => (await browser.getUrl()) !== "about:blank",
      { timeout: 10000, timeoutMsg: "New URL did not load" }
    );

    expect(await browser.getUrl()).toContain(facebookUrl);

    await browser.closeWindow();
  });
  it("Redirect on Twitter link in footer TX-TC-21", async () => {
    const oldTabs = await browser.getWindowHandles();
    await footer.clickTwitterLink();
    const newTabs = await browser.getWindowHandles();
    const newTab = newTabs.find((tab) => !oldTabs.includes(tab));

    if (!newTab) {
      throw new Error("No new tabs were opened");
    }

    await browser.switchToWindow(newTab);

    await browser.waitUntil(
      async () => (await browser.getUrl()) !== "about:blank",
      { timeout: 10000, timeoutMsg: "New URL did not load" }
    );

    expect(await browser.getUrl()).toContain(twitterUrl);

    await browser.closeWindow();
  });
});
