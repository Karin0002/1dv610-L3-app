import { Score } from './Score.js'

export class ScoreFactory {
  getScore () {
    return new Score()
  }
}