import { ColorThemeGeneratorWrapper } from '../ColorThemeGeneratorWrapper.js'
import { OptionCollection } from '../OptionCollection.js'
import { OptionFactory } from '../OptionFactory.js'

export class OptionCollectionFactory {
  /**
   * @type {OptionFactory}
   */
  #optionFactory
  /**
   * @type {ColorThemeGeneratorWrapper}
   */
  #colorThemeFactory

  /**
   * @param {OptionFactory} optionFactory
   * @param {ColorThemeGeneratorWrapper} themeFactory
   */
  constructor (optionFactory, themeFactory) {
    this.#optionFactory = optionFactory
    this.#colorThemeFactory = themeFactory
  }

  getColorThemeOptions () {
    const themes = this.#getThemes()
    const options = this.#getOptions(themes)

    return new OptionCollection(options)
  }

  #getThemes () {
    return this.#colorThemeFactory.getThemes()
  }

  #getOptions (themes) {
    const options = []
    for (let i = 0; i < themes.length; i++) {
      const theme = themes[i]
      const option = this.#optionFactory.getOption(theme.colorTheme, theme.colorsInTheme)
      options.push(option)
    }

    return options
  }
}
