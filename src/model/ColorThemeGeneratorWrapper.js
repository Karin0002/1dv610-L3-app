import {
  AnalogousThemeFactory,
  MonochromeThemeFactory,
  SplitComplementaryThemeFactory,
  TriadicThemeFactory
} from 'color-theme-generator'

export class ColorThemeGeneratorWrapper {
  #colorThemeFactories = [
    new AnalogousThemeFactory(),
    new MonochromeThemeFactory(),
    new SplitComplementaryThemeFactory(),
    new TriadicThemeFactory()
  ]

  #numberOfColorsInTheme = 3

  /**
   * Returns an array of color themes.
   */
  getThemes () {
    let themes = []
    for (let i = 0; i < this.#colorThemeFactories.length; i++) {
      themes.push(this.#getTheme(i))
    }

    return themes
  }

  #getTheme (indexOfFactory) {
    return this.#colorThemeFactories[indexOfFactory].getColorTheme(this.#numberOfColorsInTheme)
  }
}
