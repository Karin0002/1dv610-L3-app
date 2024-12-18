import { OptionCollectionFactory } from './OptionCollectionFactory.js'
import { OptionCollection } from '../OptionCollection.js'
import { Option } from '../Option.js'
import { QuestionFactory } from './QuestionFactory.js'
import { Question } from './Question.js'
import { MathWrapper } from '../MathWrapper.js'
import { ManualTestingEnum } from '../ManualTestingEnum.js'

export class Round {
  /**
   * @type {Question}
   */
  #question
  /**
   * @type {OptionCollection}
   */
  #options
  /**
   * @type {Option}
   */
  #correctAnswer

  /**
   * @type {MathWrapper}
   */
  #math

  /**
   * @param {OptionCollectionFactory} optionsFactory
   * @param {QuestionFactory} questionFactory 
   * @param {MathWrapper} mathWrapper
   */
  constructor (optionsFactory, questionFactory, mathWrapper) {
    this.#math = mathWrapper
    this.#setOptions(optionsFactory)
    this.#setQuestionAndAnswer(questionFactory)
  }

  /**
   * @param {OptionCollectionFactory} factory 
   */
  #setOptions (factory) {
    this.#options = factory.getColorThemeOptions()
  }

  /**
   * @param {QuestionFactory} factory 
   */
  #setQuestionAndAnswer (factory) {
    this.#correctAnswer = this.#getRandomOption()

    this.#question = factory.getColorThemeQuestion(this.#correctAnswer.colors)
  }

  #getRandomOption () {
    return this.#options.options[this.#getRandomIndex()]
  }

  #getRandomIndex () {
    return this.#math.floor(this.#math.random() * this.#options.options.length)
  }

  getQuestion () {
    return this.#question
  }

  getOptions () {
    // return this.#options.options.map((option) => option.theme)
    return [
      ManualTestingEnum.CORRECTOPTION,
      ManualTestingEnum.INCORRECTOPTION
    ]
  }

  isAnswerCorrect (answer) {
    // return answer === this.#correctAnswer.theme
    return answer === ManualTestingEnum.CORRECTOPTION
  }
}