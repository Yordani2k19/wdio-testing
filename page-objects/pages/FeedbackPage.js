import Base from '../Base'

class FeedbackPage extends Base {
  get feedbackLink() {
    return $('#feedback')
  }

  get feedbackForm() {
    return $('.form-inputs')
  }

  get nameInput() {
    return $('#name')
  }

  get emailInput() {
    return $('#email')
  }

  get subjectInput() {
    return $('#subject')
  }

  get questionsInput() {
    return $('#comment')
  }

  get submitBtn() {
    return $('input[type="submit"]')
  }

  clickFeedbackLink() {
    this.feedbackLink.waitForExist()
    this.feedbackLink.click()
  }

  fillFeedbackForm(name, email, subject, questions) {
    this.feedbackForm.waitForExist()
    this.nameInput.waitForExist()
    this.nameInput.setValue(name)
    this.emailInput.waitForExist()
    this.emailInput.setValue(email)
    this.subjectInput.waitForExist()
    this.subjectInput.setValue(subject)
    this.questionsInput.waitForExist()
    this.questionsInput.setValue(questions)
    // this.submitBtn.waitForExist()
    // this.submitBtn.click()
  }

  submitFeedbackForm() {
    this.submitBtn.waitForExist()
    this.submitBtn.click()
  }
}

export default new FeedbackPage()
