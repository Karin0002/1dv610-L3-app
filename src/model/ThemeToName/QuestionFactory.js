import { ColorWrapper } from '../ColorWrapper.js'
import { Question } from './Question.js'

export class QuestionFactory {
  /**
   * @type {ColorWrapper}
   */
  #colorConverter

  /**
   * @param {ColorWrapper} colorConverter
   */
  constructor (colorConverter) {
    this.#colorConverter = colorConverter
  }

  getQuestion (colorsInTheme) {
    return new Question(colorsInTheme, this.#colorConverter)
  }
}
