import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import ExchangePage from '../page-objects/pages/ExchangePage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Currency Exhange', () => {
  it('Login into App', () => {
    App.openLoginPage()
    LoginPage.login('username', 'password')

    Navbar.navExists()
  })

  it('Perform Currency Exhange', () => {
    Navbar.payBillsClick()

    ExchangePage.openPurchaseCurrency()
    ExchangePage.fillCurrencyExchangeForm('CAD', '1200')
    ExchangePage.submitCurrencyForm()

    const alertMessage = $('#alert_content')
    alertMessage.waitForExist()
    expect(alertMessage).toHaveText(
      'Foreign currency cash was successfully purchased.'
    )
  })

  it('Logout', () => {
    LoginPage.logout()

    Navbar.signInButton.waitForExist()
  })
})
