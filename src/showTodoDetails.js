function showTodoDetails (e) {
  //if(e.target != this){ return true; }

  e.preventDefault()
  let alltodos = document.querySelectorAll('.todo');
  let collapseDiv = e.target.nextElementSibling
    
  //make display-none to all other show-detail-divs that doesnt include this
  alltodos.forEach(elem => {
    if( elem != e.target) {
        elem.nextElementSibling.style.display = "none"
    }
  })

  if (collapseDiv.style.display == 'none'){
    collapseDiv.style.display = ""
  } else if (collapseDiv.style.display = "block"){
    collapseDiv.style.display = "none"
  }
}

export { showTodoDetails } 
