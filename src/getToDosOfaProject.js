import { todo } from './createToDo'

const getToDosOfaProject = (project_id) => {
  var array_of_todo_objects = []
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {

    let retrieveTodo = localStorage.getItem( localStorage.key( i ) ).split(',');
    if (project_id == parseInt(retrieveTodo[0])){
      let todoObj = new todo(retrieveTodo[0], retrieveTodo[1], retrieveTodo[2], retrieveTodo[3], retrieveTodo[4])
      array_of_todo_objects.push(todoObj);
    }
    
  }
  return array_of_todo_objects
}

export {getToDosOfaProject}