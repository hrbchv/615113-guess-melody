import {gameState} from './data/data';
import {changeLevel, hasTime, loseLevel, tick, writeResult} from "./data/game-logic";

const getLevel = (state, data) => {
  return data[state.level - 1];
};
const MAX_NOTES_COUNT = 3;

class GameModel {
  constructor(data, resData) {
    this.restart();
    this._data = data;
    this._allPlayresResult = resData;
  }

  get state() {
    return Object.freeze(this._state);
  }

  restart() {
    this._state = Object.assign({}, gameState);
  }

  hasNextLevel() {
    return getLevel(Object.assign({}, this._state, {level: this._state.level + 1}), this._data);
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
    return getLevel(this._state, this._data);
  }

  tick() {
    this._state = tick(this._state);
  }

  hasTime() {
    return hasTime(this._state);
  }

  writeResault(result, time) {
    this._state = writeResult(this._state, result, time);
  }

  get allPlayersResult() {
    return this._allPlayresResult;
  }
}

export default GameModel;
