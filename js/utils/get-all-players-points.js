export const getAllPlayersPoints = (data) => {
  const usersPoints = [];
  if (!data) {
    return usersPoints;
  }
  data.forEach((it) => {
    if (it.points) {
      usersPoints.push(it.points);
    }
  });
  return usersPoints;
};
