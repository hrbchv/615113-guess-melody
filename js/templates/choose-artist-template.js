export const renderTemplate = (level) => `<div class="main-wrap">
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
    </div>`;
