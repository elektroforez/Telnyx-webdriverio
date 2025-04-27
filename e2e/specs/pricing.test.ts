import { faker } from "@faker-js/faker";
import pricingPage from "../pages/pricing.page";
import cookiesBanner from "../utils/cookiesBanner";

var inputData = {
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  invalidEmail: faker.lorem.word(),
};

describe("Messaging pricing form test", () => {
  beforeEach(async () => {
    await pricingPage.open();
    await pricingPage.title.scrollIntoView();
    await cookiesBanner.closeBanner();
  });
  it("Submitting pricing form with empty fields / TX-TC-14", async () => {
    await pricingPage.submitForm();
    expect(pricingPage.firstNameErrorMsg).toHaveText("This field is required");
    expect(pricingPage.firstName).toHaveElementClass("mktoInvalid");
  });
  it("Submitting pricing form without last name input / TX-TC-15", async () => {
    await pricingPage.fillFirstName(inputData.name);
    await pricingPage.submitForm();
    expect(pricingPage.lastNameErrorMsg).toHaveText("This field is required");
    expect(pricingPage.lastName).toHaveElementClass("mktoInvalid");
  });
  it("Submitting pricing form without email name input / TX-TC-16", async () => {
    await pricingPage.fillFirstName(inputData.name);
    await pricingPage.fillLastName(inputData.lastName);
    await pricingPage.submitForm();
    expect(pricingPage.emailErrorMessage).toHaveText(
      "Must be valid email.\nexample@yourdomain.com"
    );
    expect(pricingPage.email).toHaveElementClass("mktoInvalid");
  });
  it("Submitting pricing form with invalid email name input / TX-TC-17", async () => {
    await pricingPage.fillFirstName(inputData.name);
    await pricingPage.fillLastName(inputData.lastName);
    await pricingPage.fillEmail(inputData.invalidEmail);
    await pricingPage.submitForm();
    expect(pricingPage.emailErrorMessage).toHaveText(
      "Must be valid email.\nexample@yourdomain.com"
    );
    expect(pricingPage.email).toHaveElementClass("mktoInvalid");
  });
  it("Submitting pricing form with valid data / TX-TC-18", async () => {
    await pricingPage.fillFirstName(inputData.name);
    await pricingPage.fillLastName(inputData.lastName);
    await pricingPage.fillEmail(inputData.email);
    await pricingPage.submitForm();

    await browser.waitUntil(
      async () =>
        (await browser.getUrl()) !== "https://telnyx.com/pricing/messaging",
      { timeout: 10000, timeoutMsg: "New URL did not load" }
    );

    await expect(await browser.getUrl()).toContain("/content-follow-up");
  });
});
