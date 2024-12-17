import select from '@inquirer/select'

export class InquirerWrapper {
  async getAnswerToQuestion (question, options) {
    const answer = await select({
      message: question,
      choices: options
    })

    return answer
  }
}
