import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import TransactionsPage from '../page-objects/pages/TransactionsPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Find Transactions Test', () => {
  it('Login into App', () => {
    App.openLoginPage()
    LoginPage.login('username', 'password')

    Navbar.navExists()
  })

  it('Perform Find Transactions', () => {
    Navbar.accountActivityLinkClick()

    TransactionsPage.findTransactionsLinkClick()

    TransactionsPage.fillTransactionForm(
      'Payment',
      '2020-07-01',
      '2020-07-25',
      '100',
      '2000',
      'Deposit'
    )
    TransactionsPage.submitTransactionForm()

    const submitMessage = $('.well')
    submitMessage.waitForExist()
    expect(submitMessage).toHaveText('No results.')
  })
})
