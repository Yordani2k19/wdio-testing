import Base from '../Base'

class PaymentPage extends Base {
  get paymentForm() {
    return $('#ui-tabs-1 > form')
  }

  get payee() {
    return $('#sp_payee')
  }

  get account() {
    return $('#sp_account')
  }

  get amount() {
    return $('#sp_amount')
  }

  get payDate() {
    return $('#sp_date')
  }

  get description() {
    return $('#sp_description')
  }

  get payButton() {
    return $('#pay_saved_payees')
  }

  fillPayForm(payee, account, amount, payDate, desc) {
    this.paymentForm.waitForExist()

    this.payee.waitForExist()
    this.payee.selectByVisibleText(payee)

    this.account.waitForExist()
    this.account.selectByVisibleText(account)

    this.amount.waitForExist()
    this.amount.setValue(amount)

    this.payDate.waitForExist()
    this.payDate.setValue(payDate)

    this.description.waitForExist()
    this.description.setValue(desc)
  }

  payButtonClick() {
    this.payButton.waitForExist()
    this.payButton.click()
  }
}

export default new PaymentPage()
