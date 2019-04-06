const removeTodoOfaProject = (project_id, todo_id) => {
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
   let retrieveTodo = localStorage.getItem( localStorage.key( i ) ).split(',');
    if (todo_id == i && project_id == retrieveTodo[0]){
      localStorage.removeItem(i)
    }
    
  }
  
}

const removeAllTodosOfaProject = (project_id) =>{
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  let retrieveTodo = localStorage.getItem( localStorage.key( i ) ).split(',');
    if (project_id == retrieveTodo[0]){
      localStorage.removeItem(i)
    }
    
  }
}

export { removeTodoOfaProject, removeAllTodosOfaProject }