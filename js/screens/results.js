import createElement from './../utils/createElement';
import {resultLose, allPlayersResult, gameState as newGameStat} from "../data/data";
import {renderTemplate as renderLoseTemplate} from "../templates/result-lose-template";
import {renderTemplate as renderWinTemplate} from "../templates/result-win-template";
import showScreen from "../utils/showScreen";
import {renderScreen as startRenderScreen} from "./welcome";
import getCountsPoints from "../utils/get-counts-points";
import getResultPlayer from "../utils/get-result-player";
const MAX_NOTES = 2;
const MIN_SECONS = 0;

const renderScreen = (gameStat) => {
  let thisScreen;
  if (gameStat.noteErorr > MAX_NOTES) {
    thisScreen = createElement(renderLoseTemplate(resultLose.attempts));
  } else if (gameStat.time === MIN_SECONS) {
    thisScreen = createElement(renderLoseTemplate(resultLose.time));
  } else {
    const points = getCountsPoints(gameStat.userAnswers);
    const winStat = {
      points,
      fastPoints: 0,
      descr: getResultPlayer(allPlayersResult, points),
      erorrs: gameStat.noteErorr
    };
    thisScreen = createElement(renderWinTemplate(winStat));
  }
  showScreen(thisScreen);
  thisScreen.querySelector(`.main-replay`).addEventListener(`click`, () => {
    startRenderScreen(newGameStat);
  });
};

export {renderScreen};
