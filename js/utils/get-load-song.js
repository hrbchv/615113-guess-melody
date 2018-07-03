export const getLoadSong = (src) => {
  const newAudio = new Audio();
  const newRequest = new Request(src, {mode: `no-cors`});
  return fetch(newRequest).then(function (response) {
    return response.blob();
  }).then(function (myBlob) {
    const objectURL = URL.createObjectURL(myBlob);
    newAudio.src = objectURL;
  });
};
