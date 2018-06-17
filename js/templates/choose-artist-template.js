export const renderTemplate = (level, state) => `<section class="main main--level main--level-artist">
    <a class="play-again play-again__wrap" href="#">
      <img class="play-again__img" src="/img/melody-logo-ginger.png" alt="logo" width="177" height="76">
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
      ${new Array(state.noteErorr)
  .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
    </div>

    <div class="main-wrap">
      <h2 class="title main-title">${level.question}</h2>
      <div class="player-wrapper">
      </div>
      <form class="main-list">
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="${level.answers[0].image}"
                 alt="${level.answers[0].artist}" width="134" height="134">
            ${level.answers[0].artist}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-2"/>
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="${level.answers[1].image}"
                 alt="${level.answers[1].artist}" width="134" height="134">
            ${level.answers[1].artist}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-3" name="answer" value="val-3"/>
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="${level.answers[2].image}"
                 alt="${level.answers[2].artist}" width="134" height="134">
            ${level.answers[2].artist}
          </label>
        </div>
      </form>
    </div>
  </section>`;
