import { ScoreFactory } from '../model/ScoreFactory.js'
import { RoundFactory } from '../model/ThemeToName/RoundFactory.js'
import { Timer } from '../model/Timer.js'
import { GameView } from '../view/GameView.js'
import { InquirerWrapper } from '../view/InquirerWrapper.js'
import { ColorThemeGeneratorWrapper } from '../model/ColorThemeGeneratorWrapper.js'
import { ColorWrapper } from '../model/ColorWrapper.js'
import { MathWrapper } from '../model/MathWrapper.js'
import { OptionFactory } from '../model/OptionFactory.js'
import { OptionCollectionFactory } from '../model/ThemeToName/OptionCollectionFactory.js'
import { QuestionFactory } from '../model/ThemeToName/QuestionFactory.js'
import { Player } from './Player.js'
import { RgbFactory } from '../model/RgbFactory.js'

export class PlayerFactory {
  getPlayer () {
    const view = new GameView(
      new InquirerWrapper,
      console
    )

    const model = new RoundFactory(
      new OptionCollectionFactory(new OptionFactory(), new ColorThemeGeneratorWrapper()),
      new QuestionFactory(new ColorWrapper(
        new RgbFactory(),
        new MathWrapper()
      )),
      new MathWrapper()
    )

    const scoreFactory = new ScoreFactory()

    const timer = new Timer(Date)

    return new Player(
      view,
      model,
      scoreFactory,
      timer
    )
  }
}
