import { InquirerWrapper } from './view/InquirerWrapper.js'
import { ColorWrapper } from './model/ColorWrapper.js'
import { RGB } from './model/RGB.js'

const source = new InquirerWrapper()
const question = 'What do you think?'
const options = [`\x1b[38;2;255;0;0m\u{25A0}\x1b[0m`, 'b', 'c', 'd']

const answer = await source.getAnswerToQuestion(question, ...options)
console.log(answer)

const c = new ColorWrapper
const rgb = c.getRGB('hsl(180, 75%, 50%)')
console.log(rgb.r)
console.log(rgb.g)
console.log(rgb.b)
