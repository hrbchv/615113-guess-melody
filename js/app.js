import GameModel from './game-model';
import WelcomeScreen from './screens/welcome/welcome-screen';
import GameScreen from './screens/game/game-screen';
import ResaultsScreen from './screens/results/resaults-screen';
import showScreen from './utils/show-screen';

export default class Application {

  static showWelcome() {
    const welcome = new WelcomeScreen();
    showScreen(welcome.element);
  }

  static showGame() {
    const model = new GameModel();
    const gameScreen = new GameScreen(model);
    showScreen(gameScreen.element);
    gameScreen.startGame();
  }

  static showResaults(stats) {
    const statistics = new ResaultsScreen(stats);
    showScreen(statistics.element);
  }

}
