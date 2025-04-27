import BasePage from "./base.page";

class MessagingPricing extends BasePage {
  get firstName() {
    return $("//input[@name='FirstName']");
  }

  get lastName() {
    return $("#LastName");
  }

  get email() {
    return $("#Email");
  }

  get button() {
    return $("button=Submit");
  }

  get form() {
    return $("#mktoForm_2553");
  }

  get firstNameErrorMsg() {
    return $("#ValidMsgFirstName");
  }

  get lastNameErrorMsg() {
    return $("#ValidMsgLastName");
  }

  get emailErrorMessage() {
    return $("#mktoErrorDetail");
  }

  get title() {
    return $("h2=Download pricing");
  }

  async submitForm() {
    await this.button.waitForClickable();
    await this.button.click();
  }

  async fillFirstName(text: string) {
    await this.firstName.setValue(text);
  }

  async fillLastName(text: string) {
    await this.lastName.setValue(text);
  }

  async fillEmail(text: string) {
    await this.email.setValue(text);
  }

  constructor() {
    super("/pricing/messaging");
  }
}
export default new MessagingPricing();
