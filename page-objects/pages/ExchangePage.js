import Base from '../Base'

class ExchangePage extends Base {
  get purchaseForeignCurrency() {
    return $('#tabs > ul > li:nth-child(3) > a')
  }

  get currencyForm() {
    return $('#pc_purchase_currency_form')
  }

  get currencySelect() {
    return $('#pc_currency')
  }

  get amount() {
    return $('#pc_amount')
  }

  get selectedCurrencyRadio() {
    return $('#pc_inDollars_false')
  }

  get calculateCost() {
    return $('#pc_calculate_costs')
  }

  get submitCurrencyButton() {
    return $('#purchase_cash')
  }

  openPurchaseCurrency() {
    this.purchaseForeignCurrency.waitForExist()
    this.purchaseForeignCurrency.click()
  }

  fillCurrencyExchangeForm(csSelect, amount) {
    this.currencyForm.waitForExist()

    this.currencySelect.selectByAttribute('value', csSelect)
    this.amount.setValue(amount)
    this.selectedCurrencyRadio.click()
    this.calculateCost.click()
  }

  submitCurrencyForm() {
    this.submitCurrencyButton.waitForExist()
    this.submitCurrencyButton.click()
  }
}

export default new ExchangePage()
