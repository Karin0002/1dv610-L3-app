import { BaseQuestion } from '../BaseQuestion.js'
import { ColorWrapper } from '../ColorWrapper.js'
import { QuestionEnum } from '../QuestionEnum.js'

export class Question extends BaseQuestion {
  #colorsInTheme

  #colorConverter

  #formattedTheme
  #startCode = '\x1b[38;2;'
  #unicodeSquare = '\u{25A0}'
  #resetCode = '\x1b[0m'


  /**
   * @param {ColorWrapper} colorConverter 
   */
  constructor (colorsInTheme, colorConverter) {
    super(QuestionEnum.THEMETONAME)

    this.#colorsInTheme = colorsInTheme
    this.#colorConverter = colorConverter
    this.#formatColors()
  }

  #formatColors () {
    const rgbColors = this.#getRGBColors()

    this.#formattedTheme = this.#getThemeAsString(rgbColors)
  }

  #getRGBColors () {
    const rgbColors  = []
    for (let i = 0; i < this.#colorsInTheme.length; i++) {
      const color = this.#colorsInTheme[i]
      const rgb = this.#colorConverter.getRGB(color.hsl)
      rgbColors.push(rgb)
    }

    return rgbColors
  }

  #getThemeAsString (theme) {
    const ansiCodes = theme.map((color) => this.#getAnsiColorEscapeCode(color))

    return ansiCodes.join(' ')
  }

  #getAnsiColorEscapeCode (color) {
    return `${this.#startCode}${color.r};${color.g};${color.b}m${this.#unicodeSquare}${this.#resetCode}`
  }

  toString () {
    return super.toString() + ' ' + this.#formattedTheme
  }
}