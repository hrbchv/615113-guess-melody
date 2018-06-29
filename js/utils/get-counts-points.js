const PointsPrice = {
  TRUE_ANSWER: 1,
  FAST_ANSWER: 2,
  FALSE_ANSWER: -2
};
const FALSE_RESULTS = -1;
const TIME_FAST_ANSWER = 29999;
const MAX_FALSE_ANSWERS = 2;

const getCountsPoints = (userAnswers) => {
  if (!Array.isArray(userAnswers) || userAnswers.length !== 10) {
    return FALSE_RESULTS;
  }
  const returnsTheScores = (arr) => {
    let falseAnswers = [];
    let fastAnswers = 0;
    let results = arr.reduce((sum, it) => {
      if (it.answer) {
        if (it.time <= TIME_FAST_ANSWER) {
          sum += PointsPrice.FAST_ANSWER;
          fastAnswers += 1;
          return sum;
        }
        sum += PointsPrice.TRUE_ANSWER;
        return sum;
      }
      sum += PointsPrice.FALSE_ANSWER;
      falseAnswers.push(it);
      return sum;
    }, 0);
    if (falseAnswers.length > MAX_FALSE_ANSWERS) {
      return FALSE_RESULTS;
    }
    return Object.assign({}, {simplePoints: results, fastPoints: fastAnswers});
  };
  const scores = returnsTheScores(userAnswers);
  return scores;
};

export default getCountsPoints;
