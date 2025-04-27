import BasePage from "./base.page";

class ContactPage extends BasePage {
  // #region Getters
  get helpSelect() {
    return $("#Reason_for_Contact__c");
  }
  get firstNameInput() {
    return $("#FirstName");
  }

  get lastNameInput() {
    return $("#LastName");
  }

  get businessEmailInput() {
    return $("#Email");
  }

  get countrySelect() {
    return $("#Phone_Number_Extension__c");
  }

  get phoneInput() {
    return $("#Phone_Number_Base__c");
  }

  get companyWebsiteInput() {
    return $("#Website");
  }

  get requestInput() {
    return $("#Form_Additional_Information__c");
  }

  get aboutInput() {
    return $("#How_did_you_hear_about_Telnyx_Open__c");
  }

  get productInterestSelect() {
    return $("#Form_Product__c");
  }

  get budgetSelect() {
    return $("#Form_Budget__c");
  }

  get additionalInfoInput() {
    return $("#Form_Additional_Information__c");
  }

  get submitButton() {
    return $("#mktoForm_1987 .mktoButton");
  }

  //#region Error messages

  get helpSelectErrorMsg() {
    return $("#ValidMsgReason_for_Contact__c");
  }

  get nameErrorMsg() {
    return $("#ValidMsgFirstName");
  }

  get lastNameErrorMsg() {
    return $("#ValidMsgLastName");
  }

  get emailErrorMsg() {
    return $("#ValidMsgEmail");
  }

  get websiteErrorMsg() {
    return $("#ValidMsgWebsite");
  }

  get requestErrorMsg() {
    return $("#ValidMsgForm_Additional_Information__c");
  }

  get aboutErrorMsg() {
    return $("#ValidMsgHow_did_you_hear_about_Telnyx_Open__c");
  }

  get productErrorMsg() {
    return $("#ValidMsgForm_Product__c");
  }

  get budgetErrorMsg() {
    return $("#ValidMsgForm_Budget__c");
  }

  get additionalInfoErrorMsg() {
    return $("#ValidMsgForm_Additional_Information__c");
  }

  // #endregion

  // #endregion

  constructor() {
    super("/contact-us");
  }

  async selectHelpOption(option: string) {
    await this.helpSelect.selectByVisibleText(option);
  }

  async fillFirstName(name: string) {
    await this.firstNameInput.setValue(name);
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.setValue(lastName);
  }

  async fillBusinessEmail(email: string) {
    await this.businessEmailInput.setValue(email);
  }

  async selectCountry(countryCode: string) {
    await this.countrySelect.selectByVisibleText(countryCode);
  }

  async fillPhoneNumber(phone: string) {
    await this.phoneInput.setValue(phone);
  }

  async fillCompany(company: string) {
    await this.companyWebsiteInput.setValue(company);
  }

  async fillRequest(info: string) {
    await this.requestInput.setValue(info);
  }

  async fillAboutInfo(info: string) {
    await this.aboutInput.setValue(info);
  }

  async fillAdditionalInfo(info: string) {
    await this.additionalInfoInput.setValue(info);
  }

  async selectProduct(option: string) {
    await this.productInterestSelect.waitForClickable();
    await this.productInterestSelect.selectByVisibleText(option);
  }

  async selectBudget(option: string) {
    await this.budgetSelect.waitForClickable();
    await this.budgetSelect.selectByVisibleText(option);
  }

  async submitForm() {
    await this.submitButton.waitForClickable();
    await this.submitButton.scrollIntoView();
    await this.submitButton.click();
  }
}
export default new ContactPage();
