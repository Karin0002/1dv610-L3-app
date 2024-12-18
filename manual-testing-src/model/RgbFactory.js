import { Rgb } from './Rgb.js'

export class RgbFactory {
  getRgb (red, green, blue) {
    return new Rgb(red, green, blue)
  }
}
