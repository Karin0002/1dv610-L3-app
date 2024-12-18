import { select, confirm } from '@inquirer/prompts'


export class InquirerWrapper {
  async getAnswerToQuestion (question, options) {
    const answer = await select({
      message: question,
      choices: options
    })

    return answer
  }

  async getBooleanAnswerToQuestion (question) {
    const answer = await confirm({
      message: question,
      default: true
    })

    return answer
  }
}
