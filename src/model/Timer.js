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

  /**
   * @param {Date} dateObject 
   */
  constructor (dateObject) {
    this.#date = dateObject
  }

  startTimer () {
    this.#resetTimer()

    this.#startTime = this.#date.now()
  }

  #resetTimer () {
    this.#startTime = ''
    this.#endTime = ''
  }

  stopTimer () {
    this.#endTime = this.#date.now()
  }

  getTime () {
    const time = this.#calcTime()
    this.#resetTimer()

    return time
  }

  #calcTime () {
    return (this.#endTime - this.#startTime) / 1000
  }
}
