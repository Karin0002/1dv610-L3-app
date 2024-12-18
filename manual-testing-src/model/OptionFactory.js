import { Option } from './Option.js'

export class OptionFactory {
  getOption (name, colors) {
    return new Option(name, colors)
  }
}
