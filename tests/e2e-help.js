import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import HelpPage from '../page-objects/pages/HelpPage'

describe('E2E Help Test', () => {
  it('Login into App', () => {
    App.openLoginPage()

    LoginPage.login('username', 'password')

    Navbar.navExists()
  })

  it('Load Help content', () => {
    Navbar.settingsIconClick()
    Navbar.helpLinkClick()

    const title = HelpPage.title
    expect(title).toHaveText('How do I log into my account?')

    HelpPage.transferFundsLinkClick()
    expect(title).toHaveText('How do I transfer funds?')

    HelpPage.payBillsLinkClick()
    expect(title).toHaveText('How do I pay bills?')
  })
})
