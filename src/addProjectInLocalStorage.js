import { arrayObjectsOfAllProjects } from './getAllProjectsFromLocalStorage'
function addProjectInLocalStorage(project){
  var newArrayOfProjectObjects = arrayObjectsOfAllProjects().filter(elem =>{
  	return elem;
  })
  
  newArrayOfProjectObjects.push([project._projectId,project._name])
  localStorage.setItem('projects', newArrayOfProjectObjects)
  console.log(newArrayOfProjectObjects)
}

export { addProjectInLocalStorage }