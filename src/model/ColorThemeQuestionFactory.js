import { ColorWrapper } from './ColorWrapper.js'
import { ThemeToNameQuestion } from './ThemeToNameQuestion.js'

export class ColorThemeQuestionFactory {
  #colorConverter

  /**
   * @param {ColorWrapper} colorConverter
   */
  constructor (colorConverter) {
    this.#colorConverter = colorConverter
  }

  getColorThemeQuestion (colorsInTheme) {
    return new ThemeToNameQuestion(colorsInTheme, this.#colorConverter)
  }
}
