import select from '@inquirer/select'

export class InquirerWrapper {
  async getAnswerToQuestion (question: string, ...options: string[]): Promise<string> {
    const answer = await select({
      message: question,
      choices: options
    })

    return String(answer)
  }
}
