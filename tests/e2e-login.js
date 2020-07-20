import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

describe('Testing a website', () => {
  it('Login with invalid credentials', () => {
    App.openHomePage()
    Navbar.clickSignIn()

    LoginPage.formIsVissible()
    LoginPage.fillForm('invalid user', 'invalid pw')
    LoginPage.submitForm()

    const loginErrMessage = LoginPage.loginErr
    expect(loginErrMessage).toHaveText('Login and/or password are wrong.')
  })

  it('Login with correct credentials', () => {
    App.openHomePage()

    Navbar.clickSignIn()

    LoginPage.formIsVissible()
    LoginPage.fillForm('username', 'password')
    LoginPage.submitForm()

    Navbar.navExists()
  })

  it('Logout', () => {
    LoginPage.logout()

    Navbar.signInButton.waitForExist()
  })
})
