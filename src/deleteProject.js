import { renderProjects } from './renderProjects'
import { renderTodos } from './renderTodos'

const deleteProject = e => {
	e.preventDefault()
  if(confirm("Are you sure you want to delete project?")) {
  	let projects = JSON.parse(localStorage.getItem("Projects"));
  	projects = projects.filter(project => {
  		
  	  return project.id != e.target.parentElement.parentElement.parentElement.id;
  	});
  	localStorage.setItem("Projects", JSON.stringify(projects));
  	renderProjects();
  	renderTodos();
  }
}

export { deleteProject };