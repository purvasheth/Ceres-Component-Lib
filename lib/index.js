const modalButton = document.querySelector('#modal-btn')
const closeButton = document.querySelector('#close-btn')
const cancelButton = document.querySelector('#cancel-btn')
const deleteButton = document.querySelector('#delete-btn')
const modalBg = document.querySelector('.modal-bg')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const body = document.querySelector('body');

if (modalButton) {
  modalButton.addEventListener('click', () => {
    modal.classList.remove('modal-hide')
    modalBg.classList.remove('modal-hide')
    modalContent.classList.remove('modal-hide')
    body.classList.add('body-hide-scroll')
  })
}
const addHideClass = (elem) => {
  elem.addEventListener('click', () => {
    console.log('Button')
    modal.classList.add('modal-hide')
    modalBg.classList.add('modal-hide')
    modalContent.classList.add('modal-hide')
    body.classList.remove('body-hide-scroll')
  })
}
if (closeButton && cancelButton && deleteButton) {
  addHideClass(closeButton)
  addHideClass(cancelButton)
  addHideClass(deleteButton)
}
const button = document.querySelector('#hamburger-btn');
const nav = document.querySelector('nav');
if (button) {
  button.addEventListener('click', () => {
    nav.classList.toggle('nav-hide')
  })
}
