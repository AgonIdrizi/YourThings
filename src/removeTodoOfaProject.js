const removeTodoOfaProject = (project_id, todo_id) => {
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {

    if (todo_id == i && project_id == retrieveTodo[0]){
      localStorage.removeItem(i)
    }
    
  }
  
}