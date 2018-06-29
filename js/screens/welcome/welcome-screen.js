import WelcomeView from "./welcome-view";
import Application from "../../app";

class ResaultsScreen {
  constructor(model) {
    this.model = model;
    this.content = new WelcomeView();

    this.root = this.content.element;
  }

  get element() {
    this.bind();
    return this.root;
  }

  bind() {
    this.content.onShowNextGameStep = () => {
      Application.showGame();
    };
  }
}

export default ResaultsScreen;
