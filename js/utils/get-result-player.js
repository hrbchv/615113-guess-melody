const FALSE_RESULTS = false;
const getResultPlayer = (anotherPlayers, playerStats) => {
  if (!Array.isArray(anotherPlayers) || (typeof playerStats !== `object` || Array.isArray(playerStats))) {
    return FALSE_RESULTS;
  }
  if (playerStats.result > 0) {
    anotherPlayers.push(playerStats.result);
    anotherPlayers.sort((a, b) => b - a);
    let t = anotherPlayers.length;
    let i = anotherPlayers.indexOf(playerStats.result) + 1;
    let n = Math.round(100 - (i / anotherPlayers.length * 100));
    return `Вы заняли ${i} место из ${t} игроков. Это лучше, чем у ${n}% игроков`;
  } else if (playerStats.notes) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
};

export default getResultPlayer;
