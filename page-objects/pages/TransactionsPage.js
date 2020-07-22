import Base from '../Base'

class TransactionsPage extends Base {
  get findTransactionsLink() {
    return $('#tabs > ul > li:nth-child(2) > a')
  }

  get transactionsForm() {
    return $('#find_transactions_form')
  }

  get descriptions() {
    return $('#aa_description')
  }

  get fromDate() {
    return $('#aa_fromDate')
  }

  get toDate() {
    return $('#aa_toDate')
  }

  get fromAmount() {
    return $('#aa_fromAmount')
  }

  get toAmount() {
    return $('#aa_toAmount')
  }

  get type() {
    return $('#aa_type')
  }

  get submitButton() {
    return $('button[type="submit"]')
  }

  findTransactionsLinkClick() {
    this.findTransactionsLink.waitForExist()
    this.findTransactionsLink.click()
  }

  fillTransactionForm(desc, fromDate, toDate, fromAmount, toAmount, type) {
    this.transactionsForm.waitForExist()

    this.descriptions.waitForExist()
    this.descriptions.setValue(desc)

    this.fromDate.waitForExist()
    this.fromDate.setValue(fromDate)
    this.toDate.waitForExist()
    this.toDate.setValue(toDate)

    this.fromAmount.waitForExist()
    this.fromAmount.setValue(fromAmount)
    this.toAmount.waitForExist()
    this.toAmount.setValue(toAmount)

    this.type.waitForExist()
    this.type.selectByVisibleText(type)
  }

  submitTransactionForm() {
    this.submitButton.waitForExist()
    this.submitButton.click()
  }
}

export default new TransactionsPage()
