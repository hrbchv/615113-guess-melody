import AbstractView from '../../abstract-view';
import createElement from "../../utils/create-element";
import {renderTemplate} from '../../templates/choose-artist-template';
import {getAudioElement} from "../../utils/get-audio-element";

export default class ArtistView extends AbstractView {
  constructor(level, gameState) {
    super();
    this.gameState = gameState;
    this.level = level;
    this.trueAnswers = this.level.answers.find((it) => it.src);
  }

  get template() {
    return renderTemplate(this.level, this.gameState);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.createPlayer(this._element);
    this.bind(this._element);
    return this._element;
  }

  createPlayer(element) {
    const player = getAudioElement(this.trueAnswers.src);
    element.querySelector(`.player-wrapper`).prepend(player);
  }

  render() {
    return createElement(this.template);
  }

  onShowNextGameStep() {
  }

  onShowStartScreen() {
  }

  bind(element) {
    [...element.querySelectorAll(`.main-answer`)].forEach((it) => {
      it.addEventListener(`click`, () => {
        const userAnswers = [it.innerText];
        this.onShowNextGameStep(userAnswers, [this.trueAnswers.artist]);
      });
    });
    element.querySelector(`.play-again`).addEventListener(`click`, () => {
      this.onShowStartScreen();
    });
  }
}
