import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Currency Exhange', () => {
  it('Login into App', () => {
    App.openLoginPage()

    LoginPage.login('username', 'password')

    Navbar.navExists()
  })

  it('Perform Currency Exhange', () => {
    const payBills = $('#pay_bills_tab')
    payBills.click()

    const purchaseForeignCurrency = $('#tabs > ul > li:nth-child(3) > a')
    purchaseForeignCurrency.waitForExist()
    purchaseForeignCurrency.click()

    const currencyForm = $('#pc_purchase_currency_form')
    currencyForm.waitForExist()

    const currencySelect = $('#pc_currency')
    currencySelect.selectByAttribute('value', 'CAD')

    const amount = $('#pc_amount')
    amount.setValue('1200')

    const selectedCurrencyRadio = $('#pc_inDollars_false')
    selectedCurrencyRadio.click()

    const calculateCost = $('#pc_calculate_costs')
    calculateCost.click()

    const submitCurrencyButton = $('#purchase_cash')
    submitCurrencyButton.waitForExist()
    submitCurrencyButton.click()

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
