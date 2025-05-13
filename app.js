// modal
const modal = document.getElementById('modal')
const modalBackground = document.getElementById('modal-background')
const modalContent = document.getElementById('modal-content')
const modalClose = document.getElementById('modal-close')
const modalMessage = document.getElementById('modal-message')
const modalOpenedModifier = 'opened'
const bodyFixedModifier = 'fixed'

modalBackground.addEventListener('click', closeModal)
modalContent.addEventListener('click', (e) => e.stopPropagation())
modalClose.addEventListener('click', closeModal)

function openModal() {
  modal.classList.add(modalOpenedModifier)
  document.body.classList.add(bodyFixedModifier)
}
function closeModal() {
  modal.classList.remove(modalOpenedModifier)
  document.body.classList.remove(bodyFixedModifier)
}
function displayModalMessage(message) {
  modalMessage.innerHTML = message || 'Error occurred!'
}

// add answers displaying
const challengeButtons = Array.from(document.querySelectorAll('[data-challenge-button]'))
const challengeAnswers = Array.from(document.querySelectorAll('[data-challenge-answer]'))

challengeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const message = challengeAnswers.at(index).innerHTML
    displayModalMessage(message)
    openModal()
  })
})
