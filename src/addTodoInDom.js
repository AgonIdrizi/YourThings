import  MicroModal  from 'micromodal';
import { getToDosOfaProject} from './getToDosOfaProject';
import { renderTodosInDom }  from './renderTodos';
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

function addTodoInDom(e) {
  e.preventDefault()
  console.log(e.target)
  let newTodoButton = e.target
  let SaveButton = document.querySelector('.modal__footer').firstElementChild
  
  newTodoButton.addEventListener('click', MicroModal.show('modal-1') );

  SaveButton.addEventListener('click', addTodoInLocalStorage)

 
  
}

function addTodoInLocalStorage(e) {
    e.preventDefault()
    let allProjects = document.querySelectorAll('.projects')
    let IdOfSelectedProject = 1;
     Array.prototype.forEach.call(allProjects, elem => {
      if (elem.classList.contains('p-active')){
         IdOfSelectedProject =  elem.id;
      }
    })
    let arrayOfTodoObjects = getToDosOfaProject(IdOfSelectedProject)
    
    extractDataFromTodoModal(IdOfSelectedProject)


    clearModal()
    setTimeout(MicroModal.close('modal-1'), 2000)
    
    renderTodosInDom(arrayOfTodoObjects, IdOfSelectedProject)
  
}
function clearModal() {
  let title = document.querySelector('.title')
  let description = document.querySelector('.description');
  let date = document.querySelector('.dueDate')
  

  title.value = "";
  description.value = "";
  date.value = "";
}

function extractDataFromTodoModal (IdOfSelectedProject){
  let title = document.querySelector('.title')
  let description = document.querySelector('.description');
  let date = document.querySelector('.dueDate')
  let priority = document.querySelector('.priority')
  let options = []
  Array.prototype.forEach.call(priority.children, elem => {
    options.push(elem);
    })
    
  let selectedOption = options[priority.options.selectedIndex]

  localStorage.setItem(MaxTodoKeyInLocalStorage(),`${IdOfSelectedProject.toString()},${title.value.trim()},${description.value.trim()},${date.value},${selectedOption.value}`)

}

function MaxTodoKeyInLocalStorage() {
  let retrieveTodosKeys =[]
  for ( let i = 0, len = localStorage.length; i < len; ++i ) {
    if ( !isNaN(parseInt(localStorage.key( i ))) ){
      retrieveTodosKeys.push(localStorage.key( i ))
    }
      
  }
    
  return Math.max(...retrieveTodosKeys) +1;
}
  

export { addTodoInDom }