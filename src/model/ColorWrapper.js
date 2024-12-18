import { MathWrapper } from './MathWrapper.js'
import { RgbFactory } from './RgbFactory.js'
import Color from 'color'

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

  getRGB (hsl) {
    const color = Color(hsl)
    const rgb = color.rgb().array()
    return this.#rgbFactory.getRgb(this.#math.round(rgb[0]), this.#math.round(rgb[1]), this.#math.round(rgb[2]))
  }
}