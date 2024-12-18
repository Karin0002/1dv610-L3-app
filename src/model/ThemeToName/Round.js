import { OptionCollectionFactory } from './OptionCollectionFactory.js'
import { OptionCollection } from '../OptionCollection.js'
import { Option } from '../Option.js'
import { QuestionFactory } from './QuestionFactory.js'
import { Question } from './Question.js'
import { MathWrapper } from '../MathWrapper.js'

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
    console.log(optionsFactory)
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
    // pick a random option from options as correct
    // set #correctAnswer to the option
    this.#correctAnswer = this.#getRandomOption()

    // create the question object
    // set #question as the question object
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
    // return the set question
  }

  getOptions () {
    // ONLY RETURNS THE NAME OF THE THEMES SO NO ONE CAN CHEAT
    return this.#options.options.map((option) => option.theme)
  }

  isAnswerCorrect (answer) {
    return answer === this.#correctAnswer.theme
  }
}