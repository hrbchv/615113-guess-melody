import AbstractView from '../../Abstract-View';
import createElement from "../../utils/create-element";
import {renderTemplate as renderLoseTemplate} from "../../templates/result-lose-template";
import {renderTemplate as renderWinTemplate} from "../../templates/result-win-template";
import {allPlayersResult, resultLose} from "../../data/data";
import getCountsPoints from "../../utils/get-counts-points";
import getResultPlayer from "../../utils/get-result-player";

const GameConditions = {
  MAX_NOTES: 2,
  MIN_SECONS: 0
};

export default class RenderView extends AbstractView {
  constructor(gameState) {
    super();
    this.gameState = gameState;
  }

  get template() {
    if (this.gameState.noteErorr > GameConditions.MAX_NOTES) {
      return renderLoseTemplate(resultLose.attempts);
    } else if (this.gameState.time === GameConditions.MIN_SECONS) {
      return renderLoseTemplate(resultLose.time);
    } else {
      const points = this.points;
      const winStat = {
        points,
        fastPoints: 0,
        descr: getResultPlayer(allPlayersResult, points),
        erorrs: this.gameState.noteErorr
      };
      return renderWinTemplate(winStat);
    }
  }

  get points() {
    return getCountsPoints(this.gameState.userAnswers);
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

  moveStartGame() {
  }

  bind(element) {
    element.querySelector(`.main-replay`).addEventListener(`click`, () => {
      this.moveStartGame();
    });
  }
}
