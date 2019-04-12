
import  MicroModal  from 'micromodal';
import { renderTodos } from './renderTodos'

const Todo = (id, title, description, dueDate, priority) => {
  return {id, title, description, dueDate, priority}
}

function createToDo (e) {
  e.preventDefault()

  let activeProject = document.querySelector('.p-active').parentElement
  const projects = JSON.parse(localStorage.getItem("Projects"));

  let id;

  [...projects].forEach(project => {
    if (project.id == activeProject.id) {
      id = project.todos.length + 1;
    }
  });

  let title = document.querySelector('.title')
  let description = document.querySelector('.description');
  let dueDate = document.querySelector('.dueDate')
  let priority = document.querySelector('.priority')
  let selectedOption = priority.options[priority.selectedIndex].text
  if (
    title.value !== "" &&
    description.value !== "" &&
    dueDate.value !== "" &&
    priority.value !== ""
  ) {
    const todo = Todo(id,title.value, description.value, dueDate.value, selectedOption)

    projects.forEach(project =>{
      if (project.id == activeProject.id) {
        project.todos = [...project.todos, todo];
      }
    });

    localStorage.setItem("Projects", JSON.stringify(projects));

    renderTodos();
    MicroModal.close('modal-1')

    // clear modal
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
  }else {
    console.log('please fill all fields')
  }
}

export { createToDo }