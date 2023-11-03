let darkMode = true
const buttonToggleDarkLightMode = document.getElementById('toggle-mode')

buttonToggleDarkLightMode.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'light' : 'dark'
  event.currentTarget
  .querySelector('span').textContent = '${mode} mode ativado'

  darkMode = !darkMode
})