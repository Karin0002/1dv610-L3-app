import { Rgb } from './Rgb.js'

export class RgbFactory {
  /**
   * @param {number} red 
   * @param {number} green 
   * @param {number} blue 
   */
  getRgb (red, green, blue) {
    return new Rgb(red, green, blue)
  }
}
