import { ColorThemeGeneratorWrapper } from './ColorThemeGeneratorWrapper.js'
import { Options } from './Options.js'
import { OptionFactory } from './OptionFactory.js'

export class ColorThemeOptionsFactory {
  #optionFactory
  #generator

  /**
   * @param {OptionFactory} optionFactory
   * @param {ColorThemeGeneratorWrapper} colorThemeGenerator
   */
  constructor (optionFactory, colorThemeGenerator) {
    this.#optionFactory = optionFactory
    this.#generator = colorThemeGenerator
  }

  getColorThemeOptions () {
    const themes = this.#getThemes()
    const options = this.#getOptions(themes)

    return new Options(options)
  }

  #getThemes () {
    return this.#generator.getThemes()
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
