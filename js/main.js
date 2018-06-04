'use strict';

const mainTemplate = document.querySelector(`#templates`);
const allScreens = [...mainTemplate.content.querySelectorAll(`.main`)];
const appScreen = document.querySelector(`.app`);
let currentScreenNumber = 0;
const maxRangeNumber = allScreens.length - 1;
const minRangeNumber = 0;
const KeyCode = {
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37
};
const arrowTemplate = `<div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn arrows__btn--left"><-</button>
    <button class="arrows__btn arrows__btn--right">-></button>
</div>`;

const showScreen = (screenNumber) => {
  const mainScreen = document.querySelector(`section.main`);
  mainScreen.remove();
  appScreen.prepend(allScreens[screenNumber].cloneNode(true));
};

const appendArrows = (arrowsStringElement) => {
  const arrowsWrapper = document.createElement(`div`);
  arrowsWrapper.innerHTML = arrowsStringElement;
  const leftButton = arrowsWrapper.querySelector(`.arrows__btn--left`);
  const rightButton = arrowsWrapper.querySelector(`.arrows__btn--right`);
  leftButton.addEventListener(`click`, function () {
    if (currentScreenNumber > minRangeNumber) {
      showScreen(--currentScreenNumber);
    }
  });
  rightButton.addEventListener(`click`, function () {
    if (currentScreenNumber < maxRangeNumber) {
      showScreen(++currentScreenNumber);
    }
  });
  appScreen.appendChild(arrowsWrapper);
};

document.addEventListener(`keydown`, function (e) {
  if (e.keyCode === KeyCode.ARROW_RIGHT) {
    if (currentScreenNumber < maxRangeNumber) {
      showScreen(++currentScreenNumber);
    }
  } else if (e.keyCode === KeyCode.ARROW_LEFT) {
    if (currentScreenNumber > minRangeNumber) {
      showScreen(--currentScreenNumber);
    }
  }
}, false);

showScreen(currentScreenNumber);
appendArrows(arrowTemplate);
