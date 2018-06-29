import AbstractView from '../../abstract-view';
import createElement from "../../utils/create-element";

export default class PreloaderScreen extends AbstractView {
  constructor() {
    super();
    this.cursor = 0;
    this.symbolsSeq = `/—\\|`;
  }

  get template() {
    return `<div></div>`;
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

  start() {
    this.cursor = ++this.cursor >= this.symbolsSeq.length ? 0 : this.cursor;
    this.element.textContent = this.symbolsSeq[this.cursor];
    this.timeout = setTimeout(() => this.start(), 50);
  }

  stop() {
    clearTimeout(this.timeout);
    this.element.remove();
  }
}
