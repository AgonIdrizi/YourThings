function makeProjectFieldActive (e){
  const proje = document.querySelectorAll('.projects')
  

  Array.prototype.forEach.call(proje, elem => {
  	elem.classList.remove('p-active');
  	elem.style.backgroundColor = '#DDDDDD';
  })
  e.target.classList.add('p-active');
  e.target.style.backgroundColor = 'red';
}

export { makeProjectFieldActive }