import Base from '../Base'

class HelpPage extends Base {
  get title() {
    return $('.span8 > h3')
  }

  get transferFundsLink() {
    return $('*=transfer funds?')
  }

  get payBillsLink() {
    return $('*=pay bills?')
  }

  transferFundsLinkClick() {
    this.transferFundsLink.waitForExist()
    this.transferFundsLink.click()
  }

  payBillsLinkClick() {
    this.payBillsLink.waitForExist()
    this.payBillsLink.click()
  }
}

export default new HelpPage()
