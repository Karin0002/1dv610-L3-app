export class Option {
  value
  isRightAnswer

  constructor (value: string, isRightAnswer: boolean) {
    this.value = value
    this.isRightAnswer = isRightAnswer
  }
}
