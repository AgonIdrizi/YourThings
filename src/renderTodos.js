import { getToDosOfaProject} from './getToDosOfaProject'
function renderTodos(e) {
  const project_id = e.target.id
  const arrayOfObjectTodos = getToDosOfaProject(project_id)
  const todosSection = document.querySelectorAll('#todos')[0]
  todosSection.innerHTML = "";
  addTodosInDom(arrayOfObjectTodos, todosSection, project_id)

  todosSection.forEach
}


function addTodosInDom(arrayOfObjectTodos, todosSection, project_id) {
  arrayOfObjectTodos.forEach(elem => {
  	if(project_id == parseInt(elem._projectId) ){
  	  let div = document.createElement('div');
  	  div.className = 'todo';
  	  div.id = elem._projectId;
  	  let header = document.createElement('header');
  	  header.innerText = elem._title;
  	  let description = document.createElement('p')
  	  description.innerText = elem._description;
  	  let dueDate = document.createElement('p');
  	  dueDate.innerText = elem._dueDate;
  	  let priority = document.createElement('p');
  	  priority.innerText = elem._priority;
      let collapseDiv = document.createElement('div')
      collapseDiv.style.display = 'none'
  	  todosSection.append(div);
      todosSection.append(collapseDiv)
  	  div.append(header);
  	  collapseDiv.append(description);
  	  div.append(dueDate);
  	  div.append(priority);
  	}
  	
  })
  
  const alltodos = document.querySelectorAll('.todo')
  alltodos.forEach(elem =>{
    elem.addEventListener('click',expand)
  })

  function expand(e){
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



export { renderTodos }