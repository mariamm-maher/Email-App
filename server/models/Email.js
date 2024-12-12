class Email {
  #subject;
  #body;
  #recipientEmail;

  constructor(subject, body, recipientEmail) {
    this.#subject = subject;
    this.#body = body;
    this.#recipientEmail = recipientEmail;
  }

  getSubject() {
    return this.#subject;
  }
  getBody() {
    return this.#body;
  }
  getRecipientEmail() {
    return this.#recipientEmail;
  }
  async viewAllUsers(emailModel) {
    return emailModel.find();
  }
  async sendEmail(emailModel) {
    return emailModel.find();
  }
  async repliedTo(emailModel, originalEmailId) {
    return emailModel.findById(originalEmailId);
  }
  async forwardEmail(emailModel, originalEmailId, forwardTo, status) {
    await emailModel.findById(originalEmailId);
  }
  async markEmailReadStatus(emailModel, emailId, isRead) {
    await emailModel.findByIdAndUpdate(
      emailId,
      { isRead: isRead },
      { new: true }
    );
  }
}

module.exports = Email;
