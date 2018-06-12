import getResultPlayer from './get-result-player/';
import {assert} from 'chai';

const anotherPlayersResults = [6, 12, 8, 6, 7, 9, 10];
const playerResult = {
  result: 10,
  notes: 2,
  time: 5000
};
const ResultString = {
  LOSE_TIME_TEXT: `Время вышло! Вы не успели отгадать все мелодии`,
  LOSE_ATTEMPT: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
};

describe(`Checking the output of the player's result`, () => {
  it(`Function returns a string`, () => {
    assert.isString(getResultPlayer(anotherPlayersResults, playerResult));
  });
  it(`If the attempt fails`, () => {
    assert.equal(getResultPlayer(anotherPlayersResults, Object.assign({}, playerResult, {result: -1}, {notes: 0})), ResultString.LOSE_ATTEMPT);
  });
  it(`If the time fails`, () => {
    assert.equal(getResultPlayer(anotherPlayersResults, Object.assign({}, playerResult, {result: -1}, {time: 0})), ResultString.LOSE_TIME_TEXT);
  });
  it(`If first param not array`, () => {
    assert.equal(getResultPlayer(ResultString, ResultString), false);
  });
  it(`If second param not object`, () => {
    assert.equal(getResultPlayer(anotherPlayersResults, anotherPlayersResults), false);
  });
});
