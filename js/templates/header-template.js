import {getMinutes, getSeconds} from "../data/game-logic";


export const renderTemplate = (state) => `<div><a class="play-again play-again__wrap" href="#">
      <img class="play-again__img" src="/img/melody-logo-ginger.png" alt="logo" width="177" height="76">
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${getMinutes(state.time)}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${getSeconds(state.time)}</span>
      </div>
    </svg>
    <div class="main-mistakes">
      ${new Array(state.noteErorr)
  .fill(`
<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
    </div></div>`;
