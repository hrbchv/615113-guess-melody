import showScreen from '../../utils/show-screen';
import {renderScreen as renderStartScreen} from '../welcome/welcome';
import {listQuestions} from '../../data/data';
import GenreView from "./Genre-View";
import {changeScreen} from "../../utils/change-screen";

const renderScreen = (gameState) => {
  const thisLevelQuestions = listQuestions[gameState.level - 1];
  const genreView = new GenreView(thisLevelQuestions, gameState);
  showScreen(genreView.element);
  genreView.element.querySelector(`audio`).play();
  genreView.moveNextGameStep = (userAnswers, trueAnswers) => {
    changeScreen(userAnswers, trueAnswers, gameState);
  };
  genreView.moveStartScreen = () => {
    renderStartScreen();
  };
};

export {renderScreen};
