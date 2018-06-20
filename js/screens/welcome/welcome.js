import showScreen from '../../utils/show-screen';
import {renderScreen as renderNextScreen} from '../choose-artist/choose-artist';
import {gameState} from '../../data/data';
import WelcomeView from "./Welcome-View";


const renderScreen = () => {
  const welcomeView = new WelcomeView();
  showScreen(welcomeView.element);
  welcomeView.moveNextGameStep = () => {
    renderNextScreen(Object.assign({}, gameState));
  };
};

export {renderScreen};
