import { Option } from './Option.js'

export class OptionCollection {
  /**
   * @type {Option[]}
   */
  options

  /**
   * @param {Option[]} options 
   */
  constructor (options) {
    this.options = options
  }
}
