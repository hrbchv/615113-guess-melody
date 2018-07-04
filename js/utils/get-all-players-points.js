export const getAllPlayersPoints = (dates = []) => {
  if (!dates.length) {
    return dates;
  }
  const usersPoints = dates.map((it) => it.points);
  return usersPoints;
};
