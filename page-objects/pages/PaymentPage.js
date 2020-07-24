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

  get openCalendar() {
    return $('#sp_date')
  }

  get selectedPayDate() {
    return $(
      '#ui-datepicker-div > table > tbody > tr:nth-child(3) > td:nth-child(4) > a'
    )
  }

  get description() {
    return $('#sp_description')
  }

  get payButton() {
    return $('#pay_saved_payees')
  }

  fillPayForm(payee, account, amount, desc) {
    this.paymentForm.waitForExist()

    this.payee.waitForExist()
    this.payee.selectByVisibleText(payee)

    this.account.waitForExist()
    this.account.selectByVisibleText(account)

    this.amount.waitForExist()
    this.amount.setValue(amount)

    this.openCalendar.waitForExist()
    this.openCalendar.click()
    this.selectedPayDate.waitForExist()
    this.selectedPayDate.click()

    this.description.waitForExist()
    this.description.setValue(desc)
  }

  payButtonClick() {
    this.payButton.waitForExist()
    this.payButton.click()
  }
}

export default new PaymentPage()
