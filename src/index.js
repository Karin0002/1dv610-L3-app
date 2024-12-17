import { InquirerWrapper } from './view/InquirerWrapper.js'

const source = new InquirerWrapper()
const question = 'What do you think?'
const options = [`\x1b[38;2;255;0;0m\u{25A0}\x1b[0m`, 'b', 'c', 'd']

const answer = await source.getAnswerToQuestion(question, ...options)
console.log(answer)
