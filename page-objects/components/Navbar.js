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
}

export default new Navbar()
