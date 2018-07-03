export const onloadSongs = [];

export const getLoadSong = (src) => {
  return new Promise((onload) => {
    const newAudio = new Audio(src);
    newAudio.addEventListener(`canplaythrough`, () => {
      onloadSongs.push(newAudio);
      onload();
    }, false);
  });
};
