import { Score } from './Score'

export class ScoreFactory {
  getScore () {
    return new Score()
  }
}