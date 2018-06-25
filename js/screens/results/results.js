import showScreen from "../../utils/show-screen";
import {renderScreen as startRenderScreen} from "../welcome/welcome";
import RenderView from "./result-view";


const renderScreen = (gameState) => {
  const renderView = new RenderView(gameState);
  showScreen(renderView.element);
  renderView.onShowStartGame = () => {
    startRenderScreen();
  };
};

export {renderScreen};
