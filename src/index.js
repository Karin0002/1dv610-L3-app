import { InquirerWrapper } from './view/InquirerWrapper.js'

const source = new InquirerWrapper()
const question = 'What do you think?'
const options = ['a', 'b', 'c', 'd']

const answer = await source.getAnswerToQuestion(question, ...options)
console.log(answer)