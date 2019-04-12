import  MicroModal  from 'micromodal'
import { createToDo } from './createToDo'
MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    disableScroll: true, // [5]
    disableFocus: false, // [6]
    awaitCloseAnimation: false, // [7]
    debugMode: true // [8]
  });

function showNewTodoModal (e) {
  e.preventDefault()
  console.log(e.target)
  let newTodoButton = e.target
  let saveButton = document.querySelector('.modal__footer').firstElementChild
  
  newTodoButton.addEventListener('click', MicroModal.show('modal-1') );

  saveButton.addEventListener('click', createToDo );
}

export { showNewTodoModal }