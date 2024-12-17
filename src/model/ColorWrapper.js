import { RGB } from './RGB.js'
import Color from 'color'

export class ColorWrapper {
  getRGB (hsl) {
    const color = Color(hsl)
    const rgb = color.rgb().array()
    return new RGB(Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2]))
  }
}