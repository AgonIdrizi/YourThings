import { arrayObjectsOfAllProjects } from './getAllProjectsFromLocalStorage'
import { clearProjectsElementsInDom } from './clearProjectsElementsInDom'
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
  });
   console.log('renderproj')
}

export { renderProjects }