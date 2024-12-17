import { QuestionEnum } from './QuestionEnum'

export class Question {
  #question

  /**
   * @param {QuestionEnum} questionEnum 
   */
  constructor (question) {
    this.#question = question
  }

  toString () {
    return this.#question
  }
}