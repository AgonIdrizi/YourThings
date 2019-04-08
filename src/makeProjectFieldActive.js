function makeProjectFieldActive (e){
  const proje = document.querySelectorAll('.projects')
  

  Array.prototype.forEach.call(proje, elem => {
  	elem.classList.remove('p-active');
  	elem.style.backgroundColor = 'rgb(255, 255, 255)';
  })
  e.target.classList.add('p-active');
  e.target.style.backgroundColor = '#DDDDDD';
}

export { makeProjectFieldActive }