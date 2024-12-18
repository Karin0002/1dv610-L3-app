import { select, confirm } from '@inquirer/prompts'

export class InquirerWrapper {
  /**
   * Displays a question with options to the user and returns the input recieved.
   *
   * @param {string} question 
   * @param {string} options 
   * @returns {Promise<string>}
   */
  async getAnswerToQuestion (question, options) {
    const answer = await select({
      message: question,
      choices: options
    })

    return answer
  }

  /**
   * Displays a yes or no question to the user and returns the input recieved.
   *
   * @param {string} question 
   * @param {string} options 
   * @returns {Promise<boolean>}
   */
  async getBooleanAnswerToQuestion (question) {
    const answer = await confirm({
      message: question,
      default: true
    })

    return answer
  }
}
