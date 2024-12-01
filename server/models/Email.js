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
}

module.exports = Email;
