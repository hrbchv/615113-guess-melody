import createElement from './../utils/createElement';
import showScreen from './../utils/showScreen';
import {renderTemplate} from '../templates/choose-genre-template';
import {getAudioElement} from "../utils/get-audio-element";
import {renderScreen as renderNextScreen} from './choose-artist';
import {renderScreen as renderStartScreen} from './welcome';
import {listQuestions} from '../data/data';
import {canUserPlay, changeLevel, finishGame, loseLevel, writeResult} from "../data/game-logic";
import {compareAnswers} from "../utils/compare-answers";

const TYPE_GENRE = `Jazz`;

const renderScreen = (gameState) => {
  console.log(gameState);
  const thisLevelQuestions = listQuestions[gameState.level - 1];
  const thisScreen = createElement(renderTemplate(thisLevelQuestions));
  const answerInputs = [...thisScreen.querySelectorAll(`[name="answer"]`)];
  const askButton = thisScreen.querySelector(`.genre-answer-send`);
  const trueAnswers = [];
  thisLevelQuestions.answers.forEach((it) => {
    if (it.genre === TYPE_GENRE) {
      trueAnswers.push(it.src);
    }
  });
  [...thisScreen.querySelectorAll(`.player-wrapper`)].forEach(function (it, index) {
    const audioPlayer = getAudioElement(thisLevelQuestions.answers[index].src);
    it.prepend(audioPlayer);
  });
  showScreen(thisScreen);
  thisScreen.querySelector(`audio`).play();
  askButton.setAttribute(`disabled`, true);
  askButton.addEventListener(`click`, () => {
    const inputsChecked = [...thisScreen.querySelectorAll(`[name="answer"]`)].filter((it) => it.checked);
    const userAnswers = inputsChecked.map((it) => {
      return it.previousElementSibling.querySelector(`audio`).src;
    });
    if (userAnswers.length === trueAnswers.length && compareAnswers(userAnswers, trueAnswers)) {
      gameState = writeResult(gameState, true);
      gameState = changeLevel(gameState);
      if (finishGame(gameState)) {
        // renderResultScreen(gameState);
      } else {
        renderNextScreen(gameState);
      }
    } else {
      gameState = writeResult(gameState, false);
      gameState = loseLevel(gameState);
      if (canUserPlay(gameState)) {
        gameState = changeLevel(gameState);
        if (finishGame(gameState)) {
          // renderResultScreen(gameState);
        } else {
          renderNextScreen(gameState);
        }
      } else {
        // renderResultScreen(gameState);
      }
    }
  });
  const checkAnswers = () => {
    const checkedInputs = [];
    const MIN_CHECKED_INPUT = 1;
    answerInputs.forEach((item) => {
      if (item.checked) {
        checkedInputs.push(item);
      }
    });
    return checkedInputs.length >= MIN_CHECKED_INPUT;
  };
  answerInputs.forEach((it) => {
    it.addEventListener(`change`, () => {
      if (checkAnswers()) {
        askButton.removeAttribute(`disabled`);
      } else {
        askButton.setAttribute(`disabled`, true);
      }
    });
  });
  document.querySelector(`.play-again`).addEventListener(`click`, () => {
    renderStartScreen();
  });
};

export {renderScreen};


