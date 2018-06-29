import AbstractView from '../../abstract-view';
import createElement from "../../utils/create-element";
import {renderTemplate} from '../../templates/choose-genre-template';
import {getAudioElement} from "../../utils/get-audio-element";

export default class GenreView extends AbstractView {
  constructor(level, gameState) {
    super();
    this.gameState = gameState;
    this.level = level;
    this.typeGenre = level.genre;
  }

  get template() {
    return renderTemplate(this.level, this.gameState);
  }

  get trueAnswers() {
    const answers = [];
    this.level.answers.forEach((it) => {
      if (it.genre === this.typeGenre) {
        answers.push(it.src);
      }
    });
    return answers;
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
    [...element.querySelectorAll(`.player-wrapper`)].forEach((it, index) => {
      const player = getAudioElement(this.level.answers[index].src);
      it.prepend(player);
    });
  }

  checkAnswers(inputs) {
    const checkedInputs = [];
    const MIN_CHECKED_INPUT = 1;
    inputs.forEach((item) => {
      if (item.checked) {
        checkedInputs.push(item);
      }
    });
    return checkedInputs.length >= MIN_CHECKED_INPUT;
  }

  render() {
    return createElement(this.template);
  }

  onShowNextGameStep() {
  }

  bind(element) {
    const askButton = element.querySelector(`.genre-answer-send`);
    const inputs = [...element.querySelectorAll(`[name="answer"]`)];
    askButton.setAttribute(`disabled`, true);
    askButton.addEventListener(`click`, () => {
      const inputsChecked = inputs.filter((it) => it.checked);
      const userAnswers = inputsChecked.map((it) => {
        return it.previousElementSibling.querySelector(`audio`).src;
      });
      this.onShowNextGameStep(userAnswers, this.trueAnswers);
    });
    inputs.forEach((it) => {
      it.addEventListener(`change`, () => {
        if (this.checkAnswers(inputs)) {
          askButton.removeAttribute(`disabled`);
        } else {
          askButton.setAttribute(`disabled`, true);
        }
      });
    });
  }
}
