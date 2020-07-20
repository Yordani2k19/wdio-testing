import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

describe('E2E Feedback test', () => {
  it('Go to Feedback', () => {
    App.openHomePage()
    FeedbackPage.clickFeedbackLink()
  })

  it('Fill Feedback Form', () => {
    FeedbackPage.fillFeedbackForm(
      'Pepe',
      'Pepe@email.com',
      'Pepe subject',
      'I have a question for you..'
    )

    FeedbackPage.submitFeedbackForm()

    expect(browser).toHaveUrl(
      'http://zero.webappsecurity.com/sendFeedback.html'
    )
  })
})
