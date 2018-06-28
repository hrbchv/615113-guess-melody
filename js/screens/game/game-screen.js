import ArtistView from "./artist-view";
import Application from "../../app";
import GenreView from './genre-view';
import HeaderView from "../../components/header-view";
import {GameType} from "../../data/data";
import {compareAnswers} from "../../utils/compare-answers";

const SECOND = 1000;

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = new ArtistView(this.model.getCurrentLevel(), this.model.state);

    this.root = document.createElement(`section`);
    this.root.classList.add(`main`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  get element() {
    return this.root;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this.changeLevel();
    this._levelTimeCounter = 0;

    this._interval = setInterval(() => {
      if (!this.model.isHasTime()) {
        this.stopGame();
        Application.showResaults(this.model);
      }
      this.model.tick();
      this._levelTimeCounter += SECOND;
      this.updateHeader();
    }, SECOND);
  }

  endGame() {
    Application.showResaults(this.model);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  answer(userAnswers, trueAnswers) {
    this.stopGame();
    if (compareAnswers(userAnswers, trueAnswers)) {
      this.model.writeResault(true, this._levelTimeCounter);
      if (this.model.hasNextLevel()) {
        this.model.nextLevel();
        this.startGame();
      } else {
        this.endGame();
      }
    } else {
      this.model.writeResault(false, this._levelTimeCounter);
      this.model.die();
      if (this.model.hasNextLevel() && this.model.canPlay()) {
        this.model.nextLevel();
        this.startGame();
      } else {
        this.endGame();
      }
    }
  }

  changeLevel() {
    this.updateHeader();
    const thisLevelGameState = this.model.getCurrentLevel();
    let level;

    if (thisLevelGameState.type === GameType.TYPE_ONE) {
      level = new ArtistView(thisLevelGameState, this.model.state);
    } else {
      level = new GenreView(thisLevelGameState, this.model.state);
    }
    level.onShowNextGameStep = (userAnswers, trueAnswers) => {
      this.answer(userAnswers, trueAnswers);
    };
    this.changeContentView(level);
    level.element.querySelector(`audio`).play();
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    header.onShowStartScreen = () => {
      Application.showWelcome();
    };
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }
}

export default GameScreen;

