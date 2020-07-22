import Base from '../Base'

class LoginPage extends Base {
  get loginForm() {
    return $('#login_form')
  }

  get usernameInput() {
    return $('#user_login')
  }

  get passwordInput() {
    return $('#user_password')
  }

  get submitButton() {
    return $('input[type="submit"]')
  }

  get loginErr() {
    return $('.alert-error')
  }

  get userIcon() {
    return $('.icon-user')
  }

  get logoutLink() {
    return $('#logout_link')
  }

  formIsVissible() {
    this.loginForm.waitForExist()
  }

  fillForm(username, password) {
    this.usernameInput.setValue(username)
    this.passwordInput.setValue(password)
  }

  submitForm() {
    this.submitButton.click()
  }

  login(username, password) {
    this.loginForm.waitForExist()

    this.usernameInput.waitForExist()
    this.usernameInput.setValue(username)
    this.passwordInput.waitForExist()
    this.passwordInput.setValue(password)

    this.submitButton.waitForExist()
    this.submitButton.click()
  }

  logout() {
    this.userIcon.waitForExist()
    this.userIcon.click()
    this.logoutLink.waitForExist()
    this.logoutLink.click()
  }
}

export default new LoginPage()
