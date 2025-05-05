import contactPage from "../pages/contact.page";
import thankYouPage from "../pages/thankYou.page";
import cookiesBanner from "../utils/cookiesBanner";
import { faker } from "@faker-js/faker";

var inputData = {
  selectSupport: "Support",
  selectSales: "Sales Inquiry",
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  invalidEmail: faker.lorem.word(),
  website: faker.internet.url(),
  product: "Other",
  budget: "Less than $500",
  sentence: faker.lorem.sentence(),
};

describe("Contact Us page tests", () => {
  beforeEach(async () => {
    await contactPage.open();
    await cookiesBanner.closeBanner();
  });
  it("Submit form with empty fields / TX-TC-1", async () => {
    await contactPage.submitForm();
    await expect(contactPage.helpSelect).toHaveElementClass("mktoInvalid");
    await expect(contactPage.helpSelectErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it("Submit form without first name / TX-TC-2", async () => {
    await contactPage.selectHelpOption("Support");
    await contactPage.submitForm();
    await expect(contactPage.firstNameInput).toHaveElementClass("mktoInvalid");
    await expect(contactPage.nameErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it("Submit form without last name / TX-TC-3", async () => {
    await contactPage.selectHelpOption("Support");
    await contactPage.fillFirstName("Name");
    await contactPage.submitForm();
    await expect(contactPage.lastNameInput).toHaveElementClass("mktoInvalid");
    await expect(contactPage.lastNameErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it("Submit form without email / TX-TC-4", async () => {
    await contactPage.selectHelpOption(inputData.selectSupport);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.submitForm();
    await expect(contactPage.businessEmailInput).toHaveElementClass(
      "mktoInvalid"
    );
    await expect(contactPage.emailErrorMsg).toHaveText(
      "Must be valid email.\nexample@yourdomain.com"
    );
  });
  it("Submit form with invalid email / TX-TC-5", async () => {
    await contactPage.selectHelpOption(inputData.selectSupport);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.invalidEmail);
    await contactPage.submitForm();
    await expect(contactPage.businessEmailInput).toHaveElementClass(
      "mktoInvalid"
    );
    await expect(contactPage.emailErrorMsg).toHaveText(
      "Must be valid email.\nexample@yourdomain.com"
    );
  });
  it("Submit form without company website / TX-TC-6", async () => {
    await contactPage.selectHelpOption(inputData.selectSupport);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.email);
    await contactPage.submitForm();
    await expect(contactPage.companyWebsiteInput).toHaveElementClass(
      "mktoInvalid"
    );
    await expect(contactPage.websiteErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it("Submit form without request description / TX-TC-7", async () => {
    await contactPage.selectHelpOption(inputData.selectSupport);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.email);
    await contactPage.fillCompany(inputData.website);
    await contactPage.submitForm();

    await expect(contactPage.requestInput).toHaveElementClass("mktoInvalid");
    await expect(contactPage.requestErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it('Submit form without "How did you hear about Telnyx" / TX-TC-8', async () => {
    await contactPage.selectHelpOption(inputData.selectSupport);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.email);
    await contactPage.fillCompany(inputData.website);
    await contactPage.fillRequest(inputData.sentence);
    await contactPage.submitForm();

    await expect(contactPage.aboutInput).toHaveElementClass("mktoInvalid");
    await expect(contactPage.aboutErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it("Submit form without Primary product interest / TX-TC-9", async () => {
    await contactPage.selectHelpOption(inputData.selectSales);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.email);
    await contactPage.fillCompany(inputData.website);
    await contactPage.submitForm();
    await expect(contactPage.productInterestSelect).toHaveElementClass(
      "mktoInvalid"
    );
    await expect(contactPage.productErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it("Submit form without budget / TX-TC-10", async () => {
    await contactPage.selectHelpOption(inputData.selectSales);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.email);
    await contactPage.fillCompany(inputData.website);
    await contactPage.selectProduct(inputData.product);
    await contactPage.submitForm();

    await expect(contactPage.budgetSelect).toHaveElementClass("mktoInvalid");
    await expect(contactPage.budgetErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it("Submit form without 'How do you plan to use Telnyx?' input / TX-TC-11", async () => {
    await contactPage.selectHelpOption(inputData.selectSales);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.email);
    await contactPage.fillCompany(inputData.website);
    await contactPage.selectProduct(inputData.product);
    await contactPage.selectBudget(inputData.budget);
    await contactPage.submitForm();

    await expect(contactPage.additionalInfoInput).toHaveElementClass(
      "mktoInvalid"
    );
    await expect(contactPage.additionalInfoErrorMsg).toHaveText(
      "This field is required."
    );
  });
  it("Submit fully filled 'Support' form / TX-TC-12", async () => {
    await contactPage.selectHelpOption(inputData.selectSupport);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.email);
    await contactPage.fillCompany(inputData.website);
    await contactPage.fillRequest(inputData.sentence);
    await contactPage.fillAboutInfo(inputData.sentence);
    await contactPage.submitForm();

    await browser.waitUntil(
      async () =>
        !(await browser.getUrl()).includes("/contact-us"),
      { timeout: 10000, timeoutMsg: "New URL did not load" }
    );

    await expect(await browser.getUrl()).toContain("/thank-you");

    await expect(await thankYouPage.getTitle()).toContain(
      "Telnyx - Thank You For Your Request"
    );
  });
  it("Submit fully filled 'Sales inqury' form / TX-TC-13", async () => {
    await contactPage.selectHelpOption(inputData.selectSales);
    await contactPage.fillFirstName(inputData.name);
    await contactPage.fillLastName(inputData.lastName);
    await contactPage.fillBusinessEmail(inputData.email);
    await contactPage.fillCompany(inputData.website);
    await contactPage.selectProduct(inputData.product);
    await contactPage.selectBudget(inputData.budget);
    await contactPage.fillAdditionalInfo(inputData.sentence);
    await contactPage.fillAboutInfo(inputData.sentence);
    await contactPage.submitForm();

    await browser.waitUntil(
      async () =>
        !(await browser.getUrl()).includes("/contact-us"),
      { timeout: 10000, timeoutMsg: "New URL did not load" }
    );

    await expect(await browser.getUrl()).toContain("/thank-you");

    await expect(await thankYouPage.getTitle()).toContain(
      "Telnyx - Thank You For Your Request"
    );
  });
});
