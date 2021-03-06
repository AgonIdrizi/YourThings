
import { renderProjects } from "./renderProjects"

const Project = (id, name, todos) =>{
  return {id, name, todos}
}



const createProject = e => {
  e.preventDefault();

  let projects = JSON.parse(localStorage.getItem("Projects")),
   id = projects[projects.length - 1] !== undefined
            ? projects[projects.length-1].id
            : 0;

  const addProjectInput = document.querySelector('.add-project').firstElementChild;
  const ProjectSection = document.querySelector('#projects');

  if (addProjectInput.value !== ""){
    id++;
    const project = Project(id, addProjectInput.value, []);

    addProjectInput.value = "";

    projects.push({id: project.id, name: project.name, todos: project.todos})
    localStorage.setItem("Projects",JSON.stringify(projects));


    renderProjects();
    //make last project active
    let allProjectsInDom = document.querySelectorAll('.project')
    
    allProjectsInDom.forEach(domProject => {
      console.log(domProject.id)
      if(domProject.id == project.id){
        console.log(domProject.id)
        domProject.firstElementChild.classList.add('p-active');
      }
    })
  }else {
    //here put error div
    console.log('cant add project without name')
  }

}

export { createProject }