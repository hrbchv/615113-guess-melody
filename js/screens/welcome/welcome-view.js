import AbstractView from '../../abstract-view';
import createElement from "../../utils/create-element";
import {renderTemplate} from "../../templates/welcome-template";


export default class WelcomeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return renderTemplate();
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

  onShowNextGameStep() {
  }

  bind(element) {
    element.querySelector(`.main-play`).addEventListener(`click`, () => {
      this.onShowNextGameStep();
    });
  }
}
