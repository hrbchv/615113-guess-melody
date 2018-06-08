import createElement from './../utils/createElement';
import showScreen from "../utils/showScreen";
import startScreen from "./welcome";

const stringElement = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const screen = createElement(stringElement);
screen.querySelector(`.main-replay`).addEventListener(`click`, () => {
  showScreen(startScreen);
});

export default screen;
