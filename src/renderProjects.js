import { arrayObjectsOfAllProjects } from './getAllProjectsFromLocalStorage'

const renderProjects = function (){
  var projectSection = document.querySelectorAll('#projects')[0]
  var arrayOfAllProjects = arrayObjectsOfAllProjects() ;
  arrayOfAllProjects.forEach(elem => {
  	let p = document.createElement('p')
  	p.innerText = elem[1];
  	p.className = 'projects';
  	p.id = elem[0];
  	projectSection.append(p);
  });
}

export { renderProjects }