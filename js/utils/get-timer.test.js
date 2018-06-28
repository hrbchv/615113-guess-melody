import getTimer from './get-timer';
import {assert} from 'chai';

describe(`Check timer`, () => {

  it(`Timer is a number`, () => {
    assert.throw(() => getTimer({}), Error);
  });
  it(`Timer hasn't negative parametr`, () => {
    assert.throw(() => getTimer(-3000), Error);
  });
  it(`Check timer method tick`, () => {
    const time = 30000;
    const newTimer = getTimer(time);
    newTimer.tick();
    assert.equal(newTimer.timerTime, 29000);
  });

});
