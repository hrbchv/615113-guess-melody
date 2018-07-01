import ResaultView from "./result-view";
import Application from "../../app";

class ResaultsScreen {
  constructor(model) {
    this.model = model;
    this.content = new ResaultView(this.model.state, this.model.allPlayersResult);

    this.root = this.content.element;
  }

  get element() {
    this.content.onShowStartGame = () => {
      Application.showGame();
    };
    return this.root;
  }
}

export default ResaultsScreen;
