import { ScoreFactory } from '../model/ScoreFactory.js'
import { RoundFactory } from '../model/ThemeToName/RoundFactory.js'
import { Timer } from '../model/Timer.js'
import { GameView } from '../view/GameView.js'

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

  constructor (view, gameRoundFactory, scoreFactory, timer) {
    this.#view = view
    this.#model = gameRoundFactory
    this.#scoreFactory = scoreFactory
    this.#timer = timer
  }

  startGame (numberOfRounds) {
    try {
      this.#view.displayWelcomeMessage()

      do {
        this.#play(numberOfRounds)
      } while (this.#shouldRestartGame());
    } catch {
      this.#view.displayErrorMessage()
    }
  }

  #play (numberOfRounds) {
    const score = this.#scoreFactory.getScore()

    this.#loopRounds(numberOfRounds, score)
    
    this.#stopTimer()
    score.setTime(this.#timer.getTime())

    this.#displayScoreOfCompleteGame(score)
  }

  #loopRounds (numberOfRounds, score) {
    for (let i = 0; i < numberOfRounds; i++) {
      const round = this.#model.getRound()

      this.#startTimer()

      const answer = this.#getAnswer(round.getQuestion(), round.getOptions())
      const result = this.#isAnswerCorrect(answer)
      this.#displayResult(result)
      score.addResult(result)
    }
  }

  #startTimer () {
    this.#timer.startTimer()
  }

  #getAnswer (question, options) {
    return this.#view.getAnswerToQuestion(question, options)
  }

  #isAnswerCorrect (answer) {
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

  #shouldRestartGame () {
    return this.#view.shouldRestartGame()
  }
}
