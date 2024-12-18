import { GameView } from '../view/GameView.js'
import { RoundFactory } from '../model/ThemeToName/RoundFactory.js'
import { ScoreFactory } from '../model/ScoreFactory.js'
import { Timer } from '../model/Timer.js'

export class Player {
  /**
   * @type {GameView}
   */
  #view

  /**
   * @type {RoundFactory}
   */
  #model

  /**
   * @type {ScoreFactory}
   */
  #scoreFactory

  /**
   * @type {Timer}
   */
  #timer

  /**
   * @param {GameView} view 
   * @param {RoundFactory} model 
   * @param {ScoreFactory} scoreFactory 
   * @param {Timer} timer 
   */
  constructor (view, model, scoreFactory, timer) {
    this.#view = view
    this.#model = model
    this.#scoreFactory = scoreFactory
    this.#timer = timer
  }

  async startGame (numberOfRounds) {
    try {
      this.#view.displayWelcomeMessage()

      do {
        await this.#play(numberOfRounds)
      } while (await this.#shouldRestartGame());
    } catch (error) {
      this.#view.displayErrorMessage()
    }
  }

  async #play (numberOfRounds) {
    const score = this.#scoreFactory.getScore()

    this.#startTimer()
    await this.#loopRounds(numberOfRounds, score)
    this.#stopTimer()

    score.setTime(this.#timer.getTime())

    this.#displayScoreOfCompleteGame(score)
  }

  async #loopRounds (numberOfRounds, score) {
    for (let i = 0; i < numberOfRounds; i++) {
      const round = this.#model.getRound()

      const answer = await this.#getAnswer(round.getQuestion(), round.getOptions())
      const result = this.#isAnswerCorrect(round, answer)
      this.#displayResult(result)
      score.addResult(result)
    }
  }

  #startTimer () {
    this.#timer.startTimer()
  }

  async #getAnswer (question, options) {
    return await this.#view.getAnswerToQuestion(question, options)
  }

  #isAnswerCorrect (round, answer) {
    return round.isAnswerCorrect(answer)
  }

  #displayResult (result) {
    this.#view.displayResultOfRound(result)
  }

  #stopTimer () {
    this.#timer.stopTimer()
  }

  #displayScoreOfCompleteGame (score) {
    this.#view.displayScoreOfGame(score)
  }

  async #shouldRestartGame () {
    return await this.#view.shouldRestartGame()
  }
}
