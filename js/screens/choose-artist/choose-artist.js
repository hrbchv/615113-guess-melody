import showScreen from '../../utils/show-screen';
import {renderScreen as renderStartScreen} from '../welcome/welcome';
import {listQuestions} from '../../data/data';
import ArtistView from "./Artist-View";
import {changeScreen} from "../../utils/change-screen";

const renderScreen = (gameState) => {
  const thisLevelQuestions = listQuestions[gameState.level - 1];
  const artistView = new ArtistView(thisLevelQuestions, gameState);
  showScreen(artistView.element);
  artistView.element.querySelector(`audio`).play();
  artistView.moveNextGameStep = (userAnswers, trueAnswers) => {
    changeScreen(userAnswers, trueAnswers, gameState);
  };
  artistView.moveStartScreen = () => {
    renderStartScreen();
  };
};

export {renderScreen};
