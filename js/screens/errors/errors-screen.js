import AbstractView from '../../abstract-view';
import createElement from "../../utils/create-element";

export default class ErrorScreen extends AbstractView {

  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `<div class="end">
        <p>Произошла ошибка: ${this.error.message}</p>
      </div>`;
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    return this._element;
  }

  render() {
    return createElement(this.template);
  }

}
