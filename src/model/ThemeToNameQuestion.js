import { Question } from './Question'

export class ThemeToNameQuestion extends Question {
  #colorsInTheme
  #unicodeSquare = '\u{25A0}'

  constructor (colorsInTheme, colorConverter) {
    this.#colorsInTheme = colorsInTheme
  }

  toString () {
    return super.toString() + ''
  }
}