import { arrayObjectsOfAllProjects } from './getAllProjectsFromLocalStorage'
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

export { renderProjects }