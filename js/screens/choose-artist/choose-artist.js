import showScreen from '../../utils/show-screen';
import {renderScreen as renderStartScreen} from '../welcome/welcome';
import {listQuestions} from '../../data/data';
import ArtistView from "./artist-view";
import {changeScreen} from "../../utils/change-screen";

const renderScreen = (gameState) => {
  const thisLevelQuestions = listQuestions[gameState.level - 1];
  const artistView = new ArtistView(thisLevelQuestions, gameState);
  showScreen(artistView.element);
  artistView.element.querySelector(`audio`).play();
  artistView.onShowNextGameStep = (userAnswers, trueAnswers) => {
    changeScreen(userAnswers, trueAnswers, gameState);
  };
  artistView.onShowStartScreen = () => {
    renderStartScreen();
  };
};

export {renderScreen};
