import { Option } from './Option'

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
