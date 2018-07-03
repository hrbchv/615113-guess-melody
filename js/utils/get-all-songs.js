export const getAllSongs = (data) => {
  const allTrackSrc = [];
  const uniqueTrackSrc = [];
  data.forEach((it) => {
    it.answers.forEach((item) => {
      if (item.src) {
        allTrackSrc.push(item.src);
      }
    });
  });
  new Set(allTrackSrc).forEach((it) => uniqueTrackSrc.push(it));
  return uniqueTrackSrc;
};
