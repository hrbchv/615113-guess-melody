export const writeResult = (gameState, result) => {
  const userAnswers = [...gameState.userAnswers];
  const userAnswer = {
    answer: result,
    time: 3000
  };
  userAnswers.push(userAnswer);
  return Object.assign({}, gameState, {userAnswers});
};

const MAX_LEVEL = 10;
export const finishGame = (gameState) => {
  return gameState.level > MAX_LEVEL;
};

const LEVEL = 1;
export const changeLevel = (gameState) => {
  return Object.assign({}, gameState, {level: gameState.level + LEVEL});
};

const NOTE = 1;
export const loseLevel = (gameState) => {
  return Object.assign({}, gameState, {noteErors: gameState.noteErors + NOTE});
};

const MAX_NOTES_COUNT = 3;
export const canUserPlay = (gameState) => {
  return gameState.noteErors < MAX_NOTES_COUNT;
};
