import { Round } from './Round.js'

export class RoundFactory {
  #optionCollectionFactory
  #questionFactory
  #mathWrapper

  /**
   * @param {OptionCollectionFactory} optionCollectionFactory
   * @param {QuestionFactory} questionFactory 
   * @param {MathWrapper} mathWrapper
   */
  constructor (optionCollectionFactory, questionFactory, mathWrapper) {
    this.#optionCollectionFactory = optionCollectionFactory
    this.#questionFactory = questionFactory
    this.#mathWrapper = mathWrapper
  }

  getRound () {
    return new Round(this.#optionCollectionFactory, this.#questionFactory, this.#mathWrapper)
  }
}