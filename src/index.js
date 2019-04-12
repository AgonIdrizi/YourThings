/*import {format, compareAsc, parse} from 'date-fns'
import { todo } from './createToDo'
import { getToDosOfaProject } from './getToDosOfaProject'
import { project } from './createProject'
import { renderProjects } from './renderProjects'
import { removeProject } from './removeProject'
import { addProjectInDom } from './addProjectInDom'
import { addTodoInDom } from './addTodoInDom'
import { addProjectInLocalStorage } from './addProjectInLocalStorage'
import  MicroModal  from 'micromodal'
*/

import { createProject } from './createProject'
import { renderProjects } from './renderProjects'
import { showTodoModal } from './showTodoModal'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

console.log('ss');
/*
//var todo1 = new todo(1, 'home','we need to cleanfff fffffffffffffffffffffffffff', format(new Date(2019,17,4),'YYYY/MMM/D'),'normal')
//var todo2 = new todo(2, 'run','on the weekend',format(new Date(2019,17,4),'YYYY/MMM/D'),'high')
if (localStorage.getItem('projects') == null){
  var project1 = new project('test')
  addProjectInLocalStorage(project1)
}
//localStorage.setItem('projects',"1,test")
//default project




//console.log(getToDosOfaProject(1))
renderProjects()

var addProjectButton = document.querySelector('.add-project').lastElementChild
console.log(addProjectButton)
addProjectButton.addEventListener('click',addProjectInDom)


var newTodoButton = document.querySelector('.add-todo').firstElementChild
newTodoButton.addEventListener('click', addTodoInDom)

*/
renderProjects()
var addProjectButton = document.querySelector('.add-project').lastElementChild
addProjectButton.addEventListener('click',createProject)

var newTodoButton = document.querySelector('.add-todo').firstElementChild

newTodoButton.addEventListener('click', showTodoModal)






