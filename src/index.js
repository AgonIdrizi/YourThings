import { todo } from './createToDo'
import { getToDosOfaProject } from './getToDosOfaProject'
import { project } from './createProject'
import { renderProjects } from './renderProjects'
import { removeProject } from './removeProject'
import { addProjectInDom } from './addProjectInDom'

console.log('ss');

var todo1 = new todo(1, 'agg','sdfsd','fassrg','fdddd')
var todo2 = new todo(2, 'agg','sdfsd','fassrg','fdddd')
var project1 = new project('test')

console.log(project1._projectId)
console.log(todo1._description)

localStorage.setItem('1',todo1.values)
localStorage.setItem('2',todo2.values)

console.log(getToDosOfaProject(1))
removeProject(2)
renderProjects()

var addProjectButton = document.querySelector('.add-project').lastElementChild
console.log(addProjectButton)
addProjectButton.addEventListener('click',addProjectInDom)

var newTodoButton = document.querySelector('.add-todo').firstElementChild
//newTodoButton.addEventListener('click',)
var modal = new PlainModal(document.getElementById('modal-content'));
console.log(modal)






