import Color from 'color'
import { MathWrapper } from './MathWrapper.js'
import { Rgb } from './Rgb.js'
import { RgbFactory } from './RgbFactory.js'

export class ColorWrapper {
  #rgbFactory
  #math

  /**
   * @param {RgbFactory} rgbFactory
   * @param {MathWrapper} mathWrapper
   */
  constructor (rgbFactory, mathWrapper) {
    this.#rgbFactory = rgbFactory
    this.#math = mathWrapper
  }

  /**
   * Coverts a hsl string to a Rgb object.
   *
   * @param {string} hsl - A string formatted as a hsl string.
   * @returns {Rgb}
   */
  getRGB (hsl) {
    const color = Color(hsl)
    const rgb = color.rgb().array()
    return this.#rgbFactory.getRgb(this.#math.round(rgb[0]), this.#math.round(rgb[1]), this.#math.round(rgb[2]))
  }
}