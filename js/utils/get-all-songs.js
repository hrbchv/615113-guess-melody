export const getAllSongs = (datas) => {
  const allTracksSrcs = [];
  const uniqueTracksSrcs = [];
  datas.forEach((it) => {
    it.answers.forEach((item) => {
      if (item.src) {
        allTracksSrcs.push(item.src);
      }
    });
  });
  new Set(allTracksSrcs).forEach((it) => uniqueTracksSrcs.push(it));
  return uniqueTracksSrcs;
};
