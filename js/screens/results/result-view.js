import AbstractView from '../../abstract-view';
import createElement from "../../utils/create-element";
import {renderTemplate as renderLoseTemplate} from "../../templates/result-lose-template";
import {renderTemplate as renderWinTemplate} from "../../templates/result-win-template";
import {resultLose} from "../../data/data";
import getCountsPoints from "../../utils/get-counts-points";
import getResultPlayer from "../../utils/get-result-player";
import {getAllPlayersPoints} from "../../utils/get-all-players-points";
import serverRouter from "../../data/server-router";
import Application from "../../app";

const GameConditions = {
  MAX_NOTES: 2,
  MIN_SECONS: 0,
  MAX_TIME: 300000
};

export default class ResaultView extends AbstractView {
  constructor(gameState, allPlayersRes) {
    super();
    this.gameState = gameState;
    this.allPlayersResults = allPlayersRes;
  }

  get template() {
    if (this.gameState.noteErorr > GameConditions.MAX_NOTES) {
      return renderLoseTemplate(resultLose.attempts);
    } else if (this.gameState.time === GameConditions.MIN_SECONS) {
      return renderLoseTemplate(resultLose.time);
    } else {
      const points = this.points.simplePoints;
      serverRouter.saveResults(points).catch((err) => {
        Application.showError(err);
      });
      const winStat = {
        points,
        fastPoints: this.points.fastPoints,
        descr: getResultPlayer(this.allPlayersPoints, points),
        erorrs: this.gameState.noteErorr,
        time: GameConditions.MAX_TIME - this.gameState.time
      };
      return renderWinTemplate(winStat);
    }
  }

  get points() {
    return getCountsPoints(this.gameState.userAnswers);
  }

  get allPlayersPoints() {
    return getAllPlayersPoints(this.allPlayersResults);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    return createElement(this.template);
  }

  onShowStartGame() {
  }

  bind(element) {
    element.querySelector(`.main-replay`).addEventListener(`click`, () => {
      this.onShowStartGame();
    });
  }
}
