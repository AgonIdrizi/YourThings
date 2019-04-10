import {renderTodos} from "./renderTodos";

const switchProject = e => {
	e.preventDefault();
  const projects = document.querySelectorAll(".project");
  [...projects].forEach(project => {
  	project.id == e.target.parentElement.id
  	  ? project.firstElementChild.classList.add("p-active")
  	  : project.firstElementChild.classList.remove("p-active")
  });
  renderTodos();
}
export { switchProject }