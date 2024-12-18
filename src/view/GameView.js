import { InquirerWrapper } from './InquirerWrapper.js'
import { Score } from '../model/Score.js'

export class GameView {
  /**
   * @type {InquirerWrapper}
   */
  #inputSource

  /**
   * @type {Console}
   */
  #output

  constructor (inputSource, output) {
    this.#inputSource = inputSource
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

  /**
   * Displays a question to the user with options and returns the input.
   *
   * @param {string} question 
   * @param {string[]} options 
   * @returns {string}
   */
  async getAnswerToQuestion (question, options) {
    return await this.#inputSource.getAnswerToQuestion(question, options)
  }

  /**
   * @param {boolean} result
   */
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

  /**
   * Asks user if the game should be restarted.
   *
   * @returns {boolean} True if the user wants to restart game, otherwise false.
   */
  async shouldRestartGame () {
    const question = '\nDo you want to restart the game?'

    return await this.#inputSource.getBooleanAnswerToQuestion(question)
  }
}
