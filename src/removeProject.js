import { arrayObjectsOfAllProjects } from './getAllProjectsFromLocalStorage'
import { removeAllTodosOfaProject } from './removeTodoOfaProject'
const removeProject = function (project_id){
  var arrOfProjectObjects = arrayObjectsOfAllProjects()
  var newArrayOfProjectObjects = arrOfProjectObjects.filter(elem =>{
  	if (elem[0] != project_id)
  	return elem;
  })
  localStorage.setItem('projects', newArrayOfProjectObjects) 
  removeAllTodosOfaProject()
}

export { removeProject }