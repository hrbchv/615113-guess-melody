export const getAllPlayersPoints = (datas = []) => {
  if (!datas.length) {
    return datas;
  }
  const usersPoints = datas.map((it) => it.points);
  return usersPoints;
};
