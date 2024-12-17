import { ColorThemeOptionsFactory } from './ColorThemeOptionsFactory.js'
import { Options } from './Options.js'
import { Option } from './Option.js'
import { ColorThemeQuestionFactory } from './ColorThemeQuestionFactory.js'

export class ThemeToNameRound {
  #question

  /**
   * @type {Options}
   */
  #options

  /**
   * @type {Option}
   */
  #correctAnswer

  /**
   * @param {ColorThemeOptionsFactory} optionsFactory
   * @param {ColorThemeQuestionFactory} questionFactory 
   */
  constructor (optionsFactory, questionFactory) {
    this.#setOptions(optionsFactory)
    this.#setQuestionAndAnswer(questionFactory)
  }

  /**
   * @param {ColorThemeOptionsFactory} factory 
   */
  #setOptions (factory) {
    this.#options = factory.getColorThemeOptions()
  }

  /**
   * @param {ColorThemeQuestionFactory} factory 
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
    return Math.floor(Math.random() * (this.#options.options.length))
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