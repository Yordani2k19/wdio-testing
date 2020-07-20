import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Find Transactions Test', () => {
  it('Login into App', () => {
    App.openLoginPage()

    LoginPage.login('username', 'password')

    Navbar.navExists()
  })

  it('Perform Find Transactions', () => {
    const accountActivityLink = $('#account_activity_tab')
    accountActivityLink.click()

    const findTransactionsLink = $('#tabs > ul > li:nth-child(2) > a')
    findTransactionsLink.waitForExist()
    findTransactionsLink.click()

    const transactionsForm = $('#find_transactions_form')
    transactionsForm.waitForExist()

    const description = $('#aa_description')
    description.setValue('payment')

    const fromDate = $('#aa_fromDate')
    fromDate.setValue('2020-07-01')
    const toDate = $('#aa_toDate')
    toDate.setValue('2020-07-25')

    const fromAmount = $('#aa_fromAmount')
    fromAmount.setValue('100')
    const toAmount = $('#aa_toAmount')
    toAmount.setValue('2000')

    const type = $('#aa_type')
    type.selectByVisibleText('Deposit')

    const findButton = $('button[type="submit"]')
    findButton.waitForExist()
    findButton.click()

    const submitMessage = $('.well')
    submitMessage.waitForExist()
    expect(submitMessage).toHaveText('No results.')
  })
})
