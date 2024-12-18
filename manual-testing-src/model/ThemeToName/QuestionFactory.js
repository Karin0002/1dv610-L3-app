import { ColorWrapper } from '../ColorWrapper.js'
import { Question } from './Question.js'

export class QuestionFactory {
  #colorConverter

  /**
   * @param {ColorWrapper} colorConverter
   */
  constructor (colorConverter) {
    this.#colorConverter = colorConverter
  }

  getColorThemeQuestion (colorsInTheme) {
    return new Question(colorsInTheme, this.#colorConverter)
  }
}
