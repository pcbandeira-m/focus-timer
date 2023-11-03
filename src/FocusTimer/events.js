import { controls } from './elements.js'
import * as actions from './actions.js'
import * as elements from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}

export function setMinutes() {
  elements.minutes.addEventListener('focus', () => {
    elements.minutes.textContent = ""
  })

  elements.minutes.onkeypress = (event) => /\d/.test(event.key)

  elements.minutes.addEventListener('blur', (event) => {
    let timeMinutes = event.currentTarget.textContent
    timeMinutes = timeMinutes > 999 ? 999 : timeMinutes 

    state.minutes = timeMinutes
    state.seconds = 0

    updateDisplay()
    elements.minutes.removeAttribute('contenteditable')
  })
}