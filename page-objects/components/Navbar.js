import Base from '../Base'

class Navbar extends Base {
  get signInButton() {
    return $('#signin_button')
  }

  get search() {
    return $('#searchTerm')
  }

  get nav() {
    return $('.nav-tabs')
  }

  get settingsIcon() {
    return $('.icon-cog')
  }

  get helpLink() {
    return $('#help_link')
  }

  get AccountActivityLink() {
    return $('#account_activity_tab')
  }

  get payBillsLink() {
    return $('#pay_bills_tab')
  }

  clickSignIn() {
    this.signInButton.waitForExist()
    this.signInButton.click()
  }

  navExists() {
    this.nav.waitForExist()
  }

  settingsIconClick() {
    this.settingsIcon.waitForExist()
    this.settingsIcon.click()
  }

  helpLinkClick() {
    this.helpLink.waitForExist()
    this.helpLink.click()
  }

  searchSomething(text) {
    this.search.waitForExist()
    this.search.setValue(text)
    browser.keys('Enter')
  }

  accountActivityLinkClick() {
    this.AccountActivityLink.waitForExist()
    this.AccountActivityLink.click()
  }

  payBillsClick() {
    this.payBillsLink.waitForExist()
    this.payBillsLink.click()
  }
}

export default new Navbar()
