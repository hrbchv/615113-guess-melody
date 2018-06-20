import showScreen from "../../utils/show-screen";
import {renderScreen as startRenderScreen} from "../welcome/welcome";
import RenderView from "./Result-View";


const renderScreen = (gameState) => {
  const renderView = new RenderView(gameState);
  showScreen(renderView.element);
  renderView.moveStartGame = () => {
    startRenderScreen();
  };
};

export {renderScreen};
