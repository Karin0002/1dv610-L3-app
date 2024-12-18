import { PlayerFactory } from './controller/PlayerFactory.js'

const factory = new PlayerFactory()
const player = factory.getPlayer()
const numberOfRounds = 2

await player.startGame(numberOfRounds)