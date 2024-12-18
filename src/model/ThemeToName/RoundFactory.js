import { MathWrapper } from '../MathWrapper.js'
import { OptionCollectionFactory } from './OptionCollectionFactory.js'
import { QuestionFactory } from './QuestionFactory.js'
import { Round } from './Round.js'

export class RoundFactory {
  /**
   * @type {OptionCollectionFactory}
   */
  #optionCollectionFactory
  /**
   * @type {QuestionFactory}
   */
  #questionFactory
  /**
   * @type {MathWrapper}
   */
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
