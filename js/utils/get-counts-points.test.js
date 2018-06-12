import getCountsPoints from './get-counts-points/';
import {assert} from 'chai';

const allAnswers = [
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 3000
  }
];

describe(`checking function of scoring`, () => {
  it(`The player answered fewer than 10 questions`, () => {
    assert.equal(getCountsPoints([...allAnswers].slice(1)), -1);
  });
  it(`If player answered for 10 questions`, () => {
    assert.equal(getCountsPoints(allAnswers), 10);
  });
  it(`If the player made a mistake in the last game`, () => {
    assert.equal(getCountsPoints([...allAnswers.slice(3), {answer: false, time: 3000}, {answer: false, time: 3000}, {answer: false, time: 3000}]), -1);
  });
  it(`If array "allAnswers" has 11 answers`, () => {
    assert.equal(getCountsPoints([...allAnswers, {answer: true, time: 3000}]), -1);
  });
  it(`If the parameter is not an array `, () => {
    assert.equal(getCountsPoints({answer: false, time: 3000}), -1);
    assert.equal(getCountsPoints(1000), -1);
    assert.equal(getCountsPoints(`string`), -1);
  });
});
