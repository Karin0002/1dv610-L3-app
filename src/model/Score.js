export class Score {
  #wins
  #losses
  #time

  constructor () {
    this.#wins = 0
    this.#losses = 0
    this.#time = 0
  }

  addResult (didWin) {
    if (didWin) {
      this.#addWin()
    } else {
      this.#addLoss()
    }
  }

  #addWin () {
    this.#wins++
  }

  #addLoss () {
    this.#losses++
  }

  setTime (time) {
    this.#time = time
  }

  getWins () {
    return this.#wins
  }

  getLosses () {
    return this.#losses
  }

  getTime () {
    return this.#time
  }
}