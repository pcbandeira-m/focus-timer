import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.aplicationIsRunning =
    document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play()
}

export function stopAndResetTimer() {
  state.aplicationIsRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
  sounds.buttonPressAudio.play()
}

export function setTimer() {
  elements.minutes.setAttribute('contenteditable', true)
  elements.minutes.focus()
}

export function toggleMusic() {
  state.aplicationIsMute =
    document.documentElement.classList.toggle("music-on");

    if(state.aplicationIsMute) {
      sounds.backgroundAudio.play()
      return
    } 
    sounds.backgroundAudio.pause()
}