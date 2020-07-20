import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Payment Test', () => {
  it('Login into App', () => {
    App.openLoginPage()

    LoginPage.login('username', 'password')

    Navbar.navExists()
  })

  it('Perform Payment', () => {
    const payBills = $('#pay_bills_tab')
    payBills.click()

    const paymentForm = $('#ui-tabs-1 > form')
    paymentForm.waitForExist()

    const payee = $('#sp_payee')
    payee.selectByVisibleText('Apple')

    const account = $('#sp_account')
    account.selectByVisibleText('Credit Card')

    const amount = $('#sp_amount')
    amount.setValue('1,200')

    const payDate = $('#sp_date')
    payDate.setValue('2020-07-16')

    const description = $('#sp_description')
    description.setValue('Monthly Payment')

    const payButton = $('#pay_saved_payees')
    payButton.waitForExist()
    payButton.click()

    const alertMessage = $('#alert_content')
    expect(alertMessage).toHaveText('The payment was successfully submitted.')
  })
})
