export const getAllPlayersPoints = (data = []) => {
  if (!data.length) {
    return data;
  }
  const usersPoints = data.map((it) => it.points);
  return usersPoints;
};
