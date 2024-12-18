// import { InquirerWrapper } from './view/InquirerWrapper.js'
// // import { ColorWrapper } from './model/ColorWrapper.js'
// // import { Rgb } from './model/Rgb.js'
// // import { ColorThemeGeneratorWrapper } from './model/ColorThemeGeneratorWrapper.js'
// // import { ThemeToNameQuestion } from './model/ThemeToNameQuestion.js'
// import { ColorThemeGeneratorWrapper } from './model/ColorThemeGeneratorWrapper.js'
// import { OptionCollectionFactory } from './model/ThemeToName/OptionCollectionFactory.js'
// import { QuestionFactory } from './model/ThemeToName/QuestionFactory.js'
// import { OptionFactory } from './model/OptionFactory.js'
// import { ColorWrapper } from './model/ColorWrapper.js'
// import { ThemeToNameRound } from './model/ThemeToNameRound.js'
// import { RgbFactory } from './model/RgbFactory.js'

// // const source = new InquirerWrapper()
// // const question = 'What do you think?'
// // const options = [`\x1b[38;2;255;0;0m\u{25A0}\x1b[0m`, 'b', 'c', 'd']

// // const answer = await source.getAnswerToQuestion(question, ...options)
// // console.log(answer)

// // const c = new ColorWrapper
// // const rgb = c.getRGB('hsl(180, 75%, 50%)')
// // console.log(rgb.r)
// // console.log(rgb.g)
// // console.log(rgb.b)

// // const g = new ColorThemeGeneratorWrapper()
// // const themes = g.getThemes()[0].colorsInTheme

// // const q = new ThemeToNameQuestion(themes, new ColorWrapper())
// // console.log(q.toString())

// const fOption = new OptionCollectionFactory(new OptionFactory(), new ColorThemeGeneratorWrapper())
// const fQuestion = new QuestionFactory(new ColorWrapper(new RgbFactory()))

// const sut = new ThemeToNameRound(fOption, fQuestion)
// const question = sut.getQuestion()
// const options = sut.getOptions()


// const source = new InquirerWrapper()

// const answer = await source.getAnswerToQuestion(question, options)
// console.log(answer)

// const isCorrect = sut.isAnswerCorrect(answer)

// console.log('Player won? ' + isCorrect)

import { PlayerFactory } from './controller/PlayerFactory.js'

const factory = new PlayerFactory()
const player = factory.getPlayer()
const numberOfRounds = 5

await player.startGame(numberOfRounds)