import  MicroModal  from 'micromodal';


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
    let getIdOfSelectedProject;
     Array.prototype.forEach.call(allProjects, elem => {
      if (elem.classList.contains('p-active')){
         getIdOfSelectedProject =  elem.id;
      }else { //return default 1
        getIdOfSelectedProject = 1;
      }
    })
    console.log(getIdOfSelectedProject)
    

  ///function extractDataFromTodoModal (){
    let title = document.querySelector('.title')
    let description = document.querySelector('.description');
    let date = document.querySelector('.dueDate')
    let priority = document.querySelector('.priority')
    let options = []
    Array.prototype.forEach.call(priority.children, elem => {
        options.push(elem);
      })
    console.log(options)
    let selectedOption = options[priority.options.selectedIndex]

    localStorage.setItem(MaxTodoKeyInLocalStorage(),`${getIdOfSelectedProject.toString()},${title.value.trim()},${description.value.trim()},${date.value},${selectedOption.value}`)
     
     
  

  function MaxTodoKeyInLocalStorage() {
    var retrieveTodosKeys =[]
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      retrieveTodosKeys.push(i); 
    }
    return Math.max(...retrieveTodosKeys) +1;
  }
}
  

export { addTodoInDom }