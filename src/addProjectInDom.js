import  {project}  from './createProject'
import { addProjectInLocalStorage } from './addProjectInLocalStorage'
import { clearProjectsElementsInDom} from './clearProjectsElementsInDom'
import { renderProjects } from './renderProjects'
function addProjectInDom(e){
  e.preventDefault();
	let projectSection = document.querySelectorAll('#projects')[0]
	let textInput = e.target.previousElementSibling
	if (textInput == ""){
	  return console.log('nothing in input') 
	}

	const proj = new project(textInput.value)
	console.log(proj)
	addProjectInLocalStorage(proj)
	clearProjectsElementsInDom()
	renderProjects()
	textInput.value = ""
}

export { addProjectInDom } 