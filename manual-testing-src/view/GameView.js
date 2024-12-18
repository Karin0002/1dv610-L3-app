import { Score } from '../model/Score.js'
import { InquirerWrapper } from './InquirerWrapper.js'

export class GameView {
  /**
   * @type {InquirerWrapper}
   */
  #inquirerWrapper

  /**
   * @type {Console}
   */
  #output

  constructor (inqurierWrapper, output) {
    this.#inquirerWrapper = inqurierWrapper
    this.#output = output
  }

  displayWelcomeMessage () {
    const message = 'Welcome to color-quiz!'

    this.#output.log(message)
  }

  displayErrorMessage () {
    const message = '\nOops, something went wrong!\n'

    this.#output.log(message)
  }

  async getAnswerToQuestion (question, options) {
    return await this.#inquirerWrapper.getAnswerToQuestion(question, options)
  }

  displayResultOfRound (result) {
    const message = `You answered ${result ? 'correctly' : 'incorrectly'}!\n`

    this.#output.log(message)
  }

  /**
   * @param {Score} score 
   */
  displayScoreOfGame (score) {
    const message = `\nResult:
  Correct guesses: ${score.getWins()}
  Incorret guesses: ${score.getLosses()}
  Time: ${score.getTime()}
    `

    this.#output.log(message)
  }

  async shouldRestartGame () {
    const question = '\nDo you want to restart the game?'

    return await this.#inquirerWrapper.getBooleanAnswerToQuestion(question)
  }
}
