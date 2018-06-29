import AbstractView from '../abstract-view';
import createElement from "../utils/create-element";
import {renderTemplate} from "../templates/header-template";


export default class HeaderView extends AbstractView {
  constructor(gameState) {
    super();
    this.gameState = gameState;
  }

  get template() {
    return renderTemplate(this.gameState);
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

  onShowStartScreen() {
  }

  bind(element) {
    const button = element.querySelector(`.play-again`);
    button.addEventListener(`click`, () => {
      this.onShowStartScreen();
    });
  }
}
