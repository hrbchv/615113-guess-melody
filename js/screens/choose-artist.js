import createElement from './../utils/createElement';
import showScreen from './../utils/showScreen';
import {renderTemplate} from '../templates/choose-artist-template';
import {getAudioElement} from "../utils/get-audio-element";
import {renderScreen as renderNextScreen} from './choose-genre';
import {renderScreen as renderStartScreen} from './welcome';
import {renderScreen as renderResultScreen} from './results';
import {listQuestions, gameState as newGameStat} from '../data/data';
import {canUserPlay, changeLevel, finishGame, loseLevel, writeResult} from "../data/game-logic";

const renderScreen = (gameState) => {
  const thisLevelQuestions = listQuestions[gameState.level - 1];
  const thisScreen = createElement(renderTemplate(thisLevelQuestions, gameState));
  const trueAnswer = thisLevelQuestions.answers.find((it) => it.src);
  const audioPlayer = getAudioElement(trueAnswer.src);
  thisScreen.querySelector(`.player-wrapper`).prepend(audioPlayer);
  showScreen(thisScreen);
  thisScreen.querySelector(`audio`).play();
  [...document.querySelectorAll(`.main-answer`)].forEach((it) => {
    it.addEventListener(`click`, () => {
      if (it.innerText === trueAnswer.artist) {
        gameState = writeResult(gameState, true);
        gameState = changeLevel(gameState);
        if (finishGame(gameState)) {
          renderResultScreen(gameState);
        } else {
          renderNextScreen(gameState);
        }
      } else {
        gameState = writeResult(gameState, false);
        gameState = loseLevel(gameState);
        if (canUserPlay(gameState)) {
          gameState = changeLevel(gameState);
          if (finishGame(gameState)) {
            renderResultScreen(gameState);
          } else {
            renderNextScreen(gameState);
          }
        } else {
          renderResultScreen(gameState);
        }
      }
    });
  });
  document.querySelector(`.play-again`).addEventListener(`click`, () => {
    renderStartScreen(newGameStat);
  });
};

export {renderScreen};
