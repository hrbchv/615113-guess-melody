import {audioTemplate} from '../templates/audio-template';
import createElement from "./createElement";

export const getAudioElement = (audioSrc) => {
  const pauseClass = `player-control--pause`;
  const audioElement = new Audio(audioSrc);
  const playerTemplate = createElement(audioTemplate());
  const playerControl = playerTemplate.querySelector(`.player-control`);
  playerTemplate.querySelector(`audio`).remove();
  playerTemplate.prepend(audioElement);
  const audioTrack = playerTemplate.querySelector(`audio`);
  audioTrack.setAttribute(`preload`, `auto`);
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
