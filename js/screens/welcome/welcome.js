import showScreen from '../../utils/show-screen';
import {renderScreen as renderNextScreen} from '../choose-artist/choose-artist';
import {gameState} from '../../data/data';
import WelcomeView from "./welcome-view";


const renderScreen = () => {
  const welcomeView = new WelcomeView();
  showScreen(welcomeView.element);
  welcomeView.onShowNextGameStep = () => {
    renderNextScreen(Object.assign({}, gameState));
  };
};

export {renderScreen};
