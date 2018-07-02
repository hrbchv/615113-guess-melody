import GameModel from './game-model';
import WelcomeScreen from './screens/welcome/welcome-screen';
import GameScreen from './screens/game/game-screen';
import ResaultsScreen from './screens/results/resaults-screen';
import showScreen from './utils/show-screen';
import PreloaderScreen from "./screens/preloader/preloader";
import ErrorScreen from './screens/errors/errors-screen';
import serverRouter from "./data/server-router";

let questData;
let resultData;
export default class Application {
  static showPreloader() {
    const preloader = new PreloaderScreen();
    showScreen(preloader.element);
    preloader.start();
    serverRouter.loadData().then((data) => {
      questData = data;
    }).then(serverRouter.loadResults).then((resData) => {
      resultData = resData;
    }).then(Application.showWelcome()).catch((err) => {
      Application.showError(err);
    }).then(() => {
      preloader.stop();
    });
  }

  static showWelcome() {
    const welcome = new WelcomeScreen();
    showScreen(welcome.element);
  }

  static showGame() {
    const model = new GameModel(questData, resultData);
    const gameScreen = new GameScreen(model);
    showScreen(gameScreen.element);
    gameScreen.startGame();
  }

  static showResaults(stats) {
    const statistics = new ResaultsScreen(stats);
    showScreen(statistics.element);
  }

  static showError(error) {
    const errorScreen = new ErrorScreen(error);
    showScreen(errorScreen.element);
  }

}
