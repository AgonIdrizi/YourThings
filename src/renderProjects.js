/*import { arrayObjectsOfAllProjects } from './getAllProjectsFromLocalStorage'
import { clearProjectsElementsInDom } from './clearProjectsElementsInDom'
import { makeProjectFieldActive } from './makeProjectFieldActive'
import { renderTodos } from './renderTodos'
function renderProjects (){
  var projectSection = document.querySelectorAll('#projects')[0]
  clearProjectsElementsInDom();
  var arrayOfAllProjects = arrayObjectsOfAllProjects() ;
  arrayOfAllProjects.forEach(elem => {
  	let p = document.createElement('p')
  	p.innerText = elem[1];
  	p.className = 'projects';
  	p.id = elem[0];
  	projectSection.append(p);
    p.addEventListener('click', makeProjectFieldActive)
    p.addEventListener('click', renderTodos)
  });

}
*/
import { switchProject } from './switchProject'
import { deleteProject } from './deleteProject'
const renderProjects = () => {
  if ( (localStorage.getItem("Projects") === undefined) || (localStorage.getItem("Projects") === "[]") || (localStorage.getItem("Projects") === null) ) {
    localStorage.setItem(
      "Projects",
      JSON.stringify([
        {
          id: 1,
          name: "Default Project",
          todos: [
            {
              id: 1,
              title: "Feedback",
              description: "Please give feedback",
              dueDate: "04/10/2019",
              priority: "High"
            }
          ]
        }
      ])
    );
  }
  const projects = JSON.parse(localStorage.getItem("Projects"));

  //delete revious projects and todos before re-render
  const projectSection = document.querySelector('#projects')
  const previousProjects = document.querySelectorAll(".project");
  [...previousProjects].forEach(div => {
    projectSection.removeChild(div);
  });

  const todoSection = document.querySelector('#todos');
  const previousTodos = document.querySelectorAll(".todo");
  [...previousTodos].forEach(elem =>{
    todoSection.removeChild(elem);
  })

  //Render
  projects.forEach(project => {
    let projectDiv = document.createElement("div");
    const projName = document.createElement("p");
    projName.innerText = project.name;
    projectDiv.append(projName);
    
    projectDiv.setAttribute("id", project.id);
    projectDiv.className ="project"
    projectDiv.addEventListener("click", switchProject, false);
    let deletespan = document.createElement('span')
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash');
    icon.style.height = '2em';
    const link = document.createElement('a');
    link.href ="#"
    link.append(icon)
    deletespan.append(link);
    deletespan.setAttribute("id",project.id);
    deletespan.addEventListener('click', deleteProject,false);
    projectDiv.append(deletespan);
    projectSection.append(projectDiv);
  })

    
  
}
export { renderProjects }