import { renderTodos } from './renderTodos'
function deleteTodo (e){
    
  e.stopPropagation();
    
  if(confirm("Are you sure deleting this todo?")) {
    let activeProject = document.querySelector('.p-active').parentElement
    let projects = JSON.parse(localStorage.getItem("Projects"));
    let parentDivId = e.target.parentElement.parentElement.parentElement.previousElementSibling.id
    
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

export { deleteTodo }