export const getLoadSong = (src) => {
  return new Promise((onload, onerror) => {
    const song = new Audio(src);
    song.onload = onload(song);
    song.onerror = () => onerror(`Не удалось загрузить аудиозапись: ${src}`);
  });
};
