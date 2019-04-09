import { getToDosOfaProject} from './getToDosOfaProject'
function renderTodos(e) {
  const project_id = e.target.id;
  console.log(e.target)
  const arrayOfObjectTodos = getToDosOfaProject(project_id)
  
  renderTodosInDom(arrayOfObjectTodos, project_id)

  
}


function renderTodosInDom(arrayOfObjectTodos, project_id) {
  const todosSection = document.querySelectorAll('#todos')[0]
  todosSection.innerHTML = "";

  arrayOfObjectTodos.forEach(elem => {
  	if(project_id == parseInt(elem._projectId) ){
  	  let div = document.createElement('div');
      console.log(elem._priority)
  	  div.classList.add('todo',elem._priority);
  	  div.id = elem._projectId;

  	  let header = document.createElement('p');
  	  header.innerText = `Title: ${elem._title}`;

  	  let description = document.createElement('p')
  	  description.innerText = `Description: ${elem._description}`;

  	  let dueDate = document.createElement('p');
  	  dueDate.innerText = `Due Date: ${elem._dueDate}`;

  	  let priority = document.createElement('p');
  	  priority.innerText = `Priority: ${elem._priority}`;
      
      let collapseDiv = document.createElement('div')
      collapseDiv.className = 'collapse';
      collapseDiv.style.display = 'none'


      let icon = document.createElement('i');
      icon.classList.add('fas', 'fa-trash');
      let link = document.createElement('a');
      link.href ="#"
      link.append(icon)
      
  	  
      todosSection.append(div);
      todosSection.append(collapseDiv);
  	  div.append(header);
  	  collapseDiv.append(description);
  	  collapseDiv.append(dueDate);
  	  div.append(priority);
      collapseDiv.append(link);

      link.addEventListener('click', deleteTodoFromLocalStorage)

  	}
  	
  })
  function deleteTodoFromLocalStorage(e){
    e.preventDefault()
    let thisParentDiv = e.target.parentNode.parentNode.parentNode
    let previousDiv = e.target.parentNode.parentNode.parentNode.previousElementSibling
    let title = previousDiv.firstElementChild.innerText.substr(6)
    arrayOfObjectTodos.forEach(elem => {
      for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        let retrieveTodo = localStorage.getItem( localStorage.key( i ) ).split(',');
        if (elem._title == title && project_id == retrieveTodo[0]){
          localStorage.removeItem(i)
        }
    
      }
      
    })
    previousDiv.innerHTML = "";
    previousDiv.style.display = 'none'
    thisParentDiv.innerHTML = "";
    thisParentDiv.style.display = 'none'

    console.log(e.target.parentNode.parentNode.parentNode.previousElementSibling)
  }
  
  const alltodos = document.querySelectorAll('.todo')
  alltodos.forEach(elem =>{
    elem.addEventListener('click',expand)
  })

  function expand(e){
    if(e.target != this){ return true; }

    e.preventDefault()

    let collapseDiv = e.target.nextElementSibling
    //make all other divs that doesnt include this
    alltodos.forEach(elem => {
      if( elem != e.target) {
        elem.nextElementSibling.style.display = "none"
      }
    })

    if (collapseDiv.style.display == 'none'){
      collapseDiv.style.display = ""
    } else if (collapseDiv.style.display = "block"){
     collapseDiv.style.display = "none"
    }
  }

}



export { renderTodos, renderTodosInDom }