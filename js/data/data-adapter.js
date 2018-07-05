import {GameType} from "./data";

const isCorrectAnswer = (exp, src) => {
  if (exp) {
    return src;
  }
  return ``;
};

export const adaptServerData = (datas) => {
  const adaptDatas = [];
  datas.forEach((it) => {
    if (it.type === GameType.TYPE_ONE) {
      it.answers.forEach((answer) => {
        answer.artist = answer.title;
        answer.image = answer.image.url;
        answer.src = isCorrectAnswer(answer.isCorrect, it.src);
        delete answer.title;
        delete answer.isCorrect;
      });
      delete it.src;
    } else if (it.type === GameType.TYPE_TWO) {
      it.answers.forEach((answer) => {
        answer.answer = it.genre === answer.genre;
      });
    }
    adaptDatas.push(it);
  });
  return adaptDatas;
};
