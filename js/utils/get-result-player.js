const FALSE_RESULTS = false;
const getResultPlayer = (anotherPlayers = [], playerStats) => {
  if (!Array.isArray(anotherPlayers) || typeof playerStats !== `number`) {
    return FALSE_RESULTS;
  }
  anotherPlayers.push(playerStats);
  anotherPlayers.sort((a, b) => b - a);
  const t = anotherPlayers.length;
  const i = anotherPlayers.indexOf(playerStats) + 1;
  const n = Math.round(100 - (i / anotherPlayers.length * 100));
  return `Вы заняли ${i} место из ${t} игроков. Это лучше, чем у ${n}% игроков`;
};

export default getResultPlayer;
