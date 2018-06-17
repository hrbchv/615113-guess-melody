export const renderTemplate = (winStat) => `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${winStat.points} баллов (${winStat.fastPoints} быстрых)
      <br>совершив ${winStat.erorrs} ошибки</div>
    <span class="main-comparison">${winStat.descr}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;
