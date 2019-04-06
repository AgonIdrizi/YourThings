function clearProjectsElementsInDom() {
  let projectSection = document.querySelectorAll('#projects')[0]
  projectSection.innerHTML = "";
   
 }

 export { clearProjectsElementsInDom }