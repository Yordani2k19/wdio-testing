import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import PaymentPage from '../page-objects/pages/PaymentPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Payment Test', () => {
  it('Login into App', () => {
    App.openLoginPage()

    LoginPage.login('username', 'password')

    Navbar.navExists()
  })

  it('Perform Payment', () => {
    Navbar.payBillsClick()

    PaymentPage.fillPayForm('Apple', 'Loan', '1200', '2020-07-08', 'Payment')
    PaymentPage.payButtonClick()

    const alertMessage = $('#alert_content')
    expect(alertMessage).toHaveText('The payment was successfully submitted.')
  })
})
