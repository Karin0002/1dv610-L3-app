import { Option } from './Option.js'

export class OptionFactory {
  getOption (theme, colors) {
    return new Option(theme, colors)
  }
}
