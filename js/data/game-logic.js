import getTimer from "../utils/get-timer";

export const writeResult = (gameState, result, time) => {
  const userAnswers = [...gameState.userAnswers];
  const userAnswer = {
    answer: result,
    time
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
  const noteErorr = gameState.noteErorr + NOTE;
  return Object.assign({}, gameState, {noteErorr});
};


export const tick = (gameState) => {
  const timer = getTimer(gameState.time);
  timer.tick();
  return Object.assign({}, gameState, {time: timer.getTime()});
};

export const isHasTime = (gameState) => {
  const timer = getTimer(gameState.time);
  return timer.getTime() > 0;
};

export const getMinutes = (time) => {
  return Math.floor(time / 60000);
};

const ROUND_OFF = 1000;
export const getSeconds = (time) => {
  const seconds = Math.ceil((time % 60000) / ROUND_OFF);
  if (seconds === 0) {
    return `00`;
  }
  if (seconds < 10) {
    return `0${seconds}`;
  }
  return seconds;
};
