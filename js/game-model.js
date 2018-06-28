import {gameState, listQuestions} from './data/data';
import {changeLevel, isHasTime, loseLevel, tick, writeResult} from "./data/game-logic";

const getLevel = (state) => listQuestions[state.level - 1];
const MAX_NOTES_COUNT = 3;

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }

  restart() {
    this._state = Object.assign({}, gameState);
  }

  hasNextLevel() {
    return getLevel(Object.assign({}, this._state, {level: this._state.level + 1}));
  }

  nextLevel() {
    this._state = changeLevel(this._state);
  }

  die() {
    this._state = loseLevel(this._state);
  }

  canPlay() {
    return this._state.noteErorr < MAX_NOTES_COUNT;
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  tick() {
    this._state = tick(this._state);
  }

  isHasTime() {
    return isHasTime(this._state);
  }

  writeResault(result, time) {
    this._state = writeResult(this._state, result, time);
  }
}

export default GameModel;
