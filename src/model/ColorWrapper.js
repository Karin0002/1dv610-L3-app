import { RgbFactory } from './RgbFactory.js'
import Color from 'color'

export class ColorWrapper {
  #rgbFactory

  /**
   * @param {RgbFactory} rgbFactory 
   */
  constructor (rgbFactory) {
    this.#rgbFactory = rgbFactory
  }

  getRGB (hsl) {
    const color = Color(hsl)
    const rgb = color.rgb().array()
    return this.#rgbFactory.getRgb(Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2]))
  }
}