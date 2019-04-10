//
import {format, compareAsc, parse} from 'date-fns'
import { showTodoDetails } from './showTodoDetails'
//import { deleteTodo } from './deleteTodo'

function removeTodosFromDom (){
  let todosSection = document.querySelector('#todos')
  let previousTodos = document.querySelectorAll('.todo');
  let previousTodoDetails = document.querySelectorAll('.collapse');
  [...previousTodos].forEach(div => {
    todosSection.removeChild(div);
  });
  [...previousTodoDetails].forEach(div => {
    todosSection.removeChild(div);
  });
}
const renderTodos = () => {
  let todosSection = document.querySelector('#todos')
  let activeProject = document.querySelector('.p-active').parentElement
  let projects = JSON.parse(localStorage.getItem('Projects'));


  //delete previous todos
  removeTodosFromDom ()
  
  console.log(projects)

  //render todos
  projects.forEach(project => {
    if (project.id == activeProject.id) {
      project.todos.forEach(todo =>{
        console.log('inside div create')

      let todoDiv = document.createElement('div');
      console.log(todo.priority)

      //render todo color acording to priority
      if (todo.priority === "Normal"){
        todoDiv.style.backgroundColor = "#ffd400";
      }else if (todo.priority === "High"){
        todoDiv.style.backgroundColor = "#ff8100";
      }

      todoDiv.addEventListener("click", showTodoDetails,false)
      todoDiv.classList.add('todo');
      todoDiv.setAttribute("id", todo.id)

      let header = document.createElement('p');
      header.innerText = `Title: ${todo.title}`;

      let description = document.createElement('p')
      description.innerText = `Description: ${todo.description}`;

      let dueDate = document.createElement('p');
      dueDate.innerText = `Due Date: ${format(todo.dueDate, "MMM[ ]DD[, ]YYYY")}`;

      let priority = document.createElement('p');
      priority.innerText = `Priority: ${todo.priority}`;
      
      let collapseDiv = document.createElement('div')
      collapseDiv.className = 'collapse';
      collapseDiv.style.display = 'none'


      let icon = document.createElement('i');
      icon.classList.add('fas', 'fa-trash');
      let link = document.createElement('a');
      link.href ="#"
      link.append(icon)
      
      
      todosSection.appendChild(todoDiv);
      todosSection.appendChild(collapseDiv);
      todoDiv.appendChild(header);
      collapseDiv.appendChild(description);
      collapseDiv.appendChild(dueDate);
      todoDiv.appendChild(priority);
      collapseDiv.appendChild(link);

      link.addEventListener('click', deleteTodo, false)
      })
    }
  })
  function deleteTodo (e){
    
    e.stopPropagation();
    
    if(confirm("Are you sure deleting this todo?")) {
      let activeProject = document.querySelector('.p-active').parentElement
      let projects = JSON.parse(localStorage.getItem("Projects"));
      let parentDivId = e.target.parentElement.parentElement.parentElement.previousElementSibling.id
      console.log(e.target.parentElement.parentElement.parentElement.previousElementSibling.id)
        projects.forEach(project => {
          if (project.id == activeProject.id) {
            project.todos = project.todos.filter(todo => {
              return todo.id != parentDivId
            });
          }
      
        });
       
      localStorage.setItem("Projects", JSON.stringify(projects));
      
      //render
      renderTodos();
    }
  }
}








export { renderTodos }