import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Search Test', () => {
  it('Loads homepage', () => {
    App.openHomePage()
  })

  it('Submits searchbox', () => {
    Navbar.searchSomething('bank')

    const results = $('h2')
    results.waitForExist()
    expect(results).toHaveText('Search Results:')
  })
})
