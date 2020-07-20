// global functions
class App {
  openHomePage() {
    browser.url('http://zero.webappsecurity.com/index.html')
  }

  openLoginPage() {
    browser.url('http://zero.webappsecurity.com/login.html')
  }

  forceLogout() {
    browser.url('http://zero.webappsecurity.com/logout.html')
  }
}

export default new App()
