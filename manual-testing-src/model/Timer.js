export class Timer {
  /**
   * @type {Date}
   */
  #date

  /**
   * @type {Date}
   */
  #startTime
  /**
   * @type {Date}
   */
  #endTime

  constructor (dateObject) {
    this.#date = dateObject
  }

  startTimer () {
    this.#resetFields()

    this.#startTime = this.#date.now()
  }

  #resetFields () {
    this.#startTime = ''
    this.#endTime = ''
  }

  stopTimer () {
    this.#endTime = this.#date.now()
  }

  getTime () {
    const time = this.#calcTime()
    this.#resetFields()

    return time
  }

  #calcTime () {
    return (this.#endTime - this.#startTime) / 1000
  }
}