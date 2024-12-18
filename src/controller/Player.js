import { RoundFactory } from '../model/ThemeToName/RoundFactory.js'
import { Timer } from '../model/Timer.js'

export class Player {
  /**
   * @type {RoundFactory}
   */
  #gameRoundFactory

  /**
   * @type {Timer}
   */
  #timer

  constructor (gameRoundFactory, timer) {
    this.#gameRoundFactory = gameRoundFactory
    this.#timer = timer
  }

  startGame (numberOfRounds) {
    // loop number of rounds:
    // create a round
    // getQuestion
    // getOptions

    // start timer

    // show question to view
    // get answer from view
    // check if answer is correct

    // print result of question

    // add win/lost to score
    // end loop

    // stop timer
    // add time to score

    // show result
  }
}