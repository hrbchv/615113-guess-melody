import showScreen from '../../utils/show-screen';
import {renderScreen as renderStartScreen} from '../welcome/welcome';
import {listQuestions} from '../../data/data';
import GenreView from "./genre-view";
import {changeScreen} from "../../utils/change-screen";

const renderScreen = (gameState) => {
  const thisLevelQuestions = listQuestions[gameState.level - 1];
  const genreView = new GenreView(thisLevelQuestions, gameState);
  showScreen(genreView.element);
  genreView.element.querySelector(`audio`).play();
  genreView.onShowNextGameStep = (userAnswers, trueAnswers) => {
    changeScreen(userAnswers, trueAnswers, gameState);
  };
  genreView.onShowStartScreen = () => {
    renderStartScreen();
  };
};

export {renderScreen};
