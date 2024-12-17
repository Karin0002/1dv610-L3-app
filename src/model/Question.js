import { QuestionEnum } from './QuestionEnum.js'

export class Question {
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