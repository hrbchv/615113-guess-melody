export const getAllSongs = (dates) => {
  const allTracksSrc = [];
  const uniqueTrackSrc = [];
  dates.forEach((it) => {
    it.answers.forEach((item) => {
      if (item.src) {
        allTracksSrc.push(item.src);
      }
    });
  });
  new Set(allTracksSrc).forEach((it) => uniqueTrackSrc.push(it));
  return uniqueTrackSrc;
};
