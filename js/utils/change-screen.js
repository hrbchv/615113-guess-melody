import {renderScreen as renderNextScreenArtist} from "../screens/choose-artist/choose-artist";
import {renderScreen as renderNextScreenGenre} from "../screens/choose-genre/choose-genre";
import {compareAnswers} from "./compare-answers";
import {renderScreen as renderResultScreen} from "../screens/results/results";
import {canUserPlay, changeLevel, finishGame, loseLevel, writeResult} from "../data/game-logic";
import {listQuestions, GameType} from "../data/data";

export const changeScreen = (userAnswers, trueAnswers, gameState) => {
  if (compareAnswers(userAnswers, trueAnswers)) {
    gameState = writeResult(gameState, true);
    gameState = changeLevel(gameState);
    if (finishGame(gameState)) {
      renderResultScreen(gameState);
    } else {
      changeTypeGame(gameState);
    }
  } else {
    gameState = writeResult(gameState, false);
    gameState = loseLevel(gameState);
    if (canUserPlay(gameState)) {
      gameState = changeLevel(gameState);
      if (finishGame(gameState)) {
        renderResultScreen(gameState);
      } else {
        changeTypeGame(gameState);
      }
    } else {
      renderResultScreen(gameState);
    }
  }
};

const changeTypeGame = (gameState) => {
  const nextLevelType = listQuestions[gameState.level - 1].type;
  if (nextLevelType === GameType.TYPE_ONE) {
    renderNextScreenArtist(gameState);
  } else if (nextLevelType === GameType.TYPE_TWO) {
    renderNextScreenGenre(gameState);
  }
};
