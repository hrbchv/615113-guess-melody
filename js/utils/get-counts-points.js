const PointsPrice = {
  TRUE_ANSWER: 1,
  FAST_ANSWER: 2,
  FALSE_ANSWER: -2
};
const FALSE_RESULTS = -1;
const START_RESULTS = 0;
const FAST_ANSWER = 2999;
const MAX_FALSE_ANSWERS = 2;

const getCountsPoints = (userAnswers) => {
  if (!Array.isArray(userAnswers) || userAnswers.length !== 10) {
    return FALSE_RESULTS;
  }
  const returnsTheScores = (arr) => {
    let results = START_RESULTS;
    let falseAnswers = [];
    arr.forEach((it) => {
      if (it.answer) {
        if (it.time <= FAST_ANSWER) {
          results += PointsPrice.FAST_ANSWER;
        }
        results += PointsPrice.TRUE_ANSWER;
        return results;
      }
      results += PointsPrice.FALSE_ANSWER;
      falseAnswers.push(it);
      return results;
    });
    if (falseAnswers.length > MAX_FALSE_ANSWERS) {
      return FALSE_RESULTS;
    }
    return results;
  };
  const scores = returnsTheScores(userAnswers);
  return scores;
};

export default getCountsPoints;
