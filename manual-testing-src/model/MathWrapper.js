export class MathWrapper {
  /**
   * Returns a random number greater or equal to 0 and less than 1.
   */
  random () {
    return Math.random()
  }

  /**
   * Returns the value of a number rounded to the nearest integer.
   *
   * @param {number} x - The number to round.
   */
  round (x) {
    return Math.round(x)
  }

  /**
   * Returns the value of a number rounded down to the nearest integer.
   *
   * @param {number} x - The number to round.
   */
  floor (x) {
    return Math.floor(x)
  }
}
