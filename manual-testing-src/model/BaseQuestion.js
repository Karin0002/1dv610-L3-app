import { QuestionEnum } from './QuestionEnum.js'

export class BaseQuestion {
  #question

  /**
   * @param {QuestionEnum} question 
   */
  constructor (question) {
    this.#question = question
  }

  toString () {
    return this.#question
  }
}