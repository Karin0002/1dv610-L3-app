export class Score {
  #wins
  #losses
  #time

  constructor () {
    this.#wins = 0
    this.#losses = 0
    this.#time = 0
  }

  addWin () {
    this.#wins++
  }

  addLoss () {
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