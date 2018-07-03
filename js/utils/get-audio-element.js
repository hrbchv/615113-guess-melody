import {audioTemplate} from '../templates/audio-template';
import createElement from "./create-element";
import {onloadSongs} from "./get-load-song";

export const getAudioElement = (audioSrc) => {
  let audioElementCurrent;
  for (let song of onloadSongs) {
    if (song.src === audioSrc) {
      audioElementCurrent = song;
      break;
    }
  }
  const pauseClass = `player-control--pause`;
  const audioElement = audioElementCurrent;
  const playerTemplate = createElement(audioTemplate());
  const playerControl = playerTemplate.querySelector(`.player-control`);
  playerTemplate.querySelector(`audio`).remove();
  playerTemplate.prepend(audioElement);
  const audioTrack = playerTemplate.querySelector(`audio`);
  playerControl.addEventListener(`click`, () => {
    if (audioTrack.paused) {
      [...document.querySelectorAll(`audio`)].forEach((it) => {
        if (!it.paused) {
          const control = it.nextElementSibling;
          control.classList.remove(pauseClass);
          it.pause();
        }
      });
      audioTrack.play();
    } else {
      audioTrack.pause();
      playerControl.classList.remove(pauseClass);
    }
  });
  audioTrack.addEventListener(`playing`, () => {
    playerControl.classList.add(pauseClass);
  });
  return playerTemplate;
};
