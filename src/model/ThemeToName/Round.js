import { MathWrapper } from '../MathWrapper.js'
import { OptionCollectionFactory } from './OptionCollectionFactory.js'
import { OptionCollection } from '../OptionCollection.js'
import { Option } from '../Option.js'
import { QuestionFactory } from './QuestionFactory.js'
import { Question } from './Question.js'

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
   * @param {OptionCollectionFactory} optionCollectionFactory
   * @param {QuestionFactory} questionFactory 
   * @param {MathWrapper} mathWrapper
   */
  constructor (optionCollectionFactory, questionFactory, mathWrapper) {
    this.#math = mathWrapper
    this.#setOptions(optionCollectionFactory)
    this.#setQuestionAndAnswer(questionFactory)
  }

  /**
   * @param {OptionCollectionFactory} optionCollectionFactory 
   */
  #setOptions (optionCollectionFactory) {
    this.#options = optionCollectionFactory.getColorThemeOptions()
  }

  /**
   * @param {QuestionFactory} questionFactory 
   */
  #setQuestionAndAnswer (questionFactory) {
    this.#correctAnswer = this.#getRandomOption()

    this.#question = questionFactory.getQuestion(this.#correctAnswer.colors)
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
    return this.#options.options.map((option) => option.theme)
  }

  /**
   * @param {string} answer 
   */
  isAnswerCorrect (answer) {
    return answer === this.#correctAnswer.theme
  }
}
