import getResultPlayer from './get-result-player/';
import {assert} from 'chai';

const anotherPlayersResults = [6, 12, 8, 6, 7, 9, 10];
const playerResult = 10;

describe(`Checking the output of the player's result`, () => {
  it(`Function returns a string`, () => {
    assert.isString(getResultPlayer(anotherPlayersResults, playerResult));
  });
  it(`If first param not array`, () => {
    assert.equal(getResultPlayer(playerResult, playerResult), false);
  });
  it(`If second param not object`, () => {
    assert.equal(getResultPlayer(anotherPlayersResults, anotherPlayersResults), false);
  });
});
