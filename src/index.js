import { todo } from './createToDo'
import { getToDosOfaProject } from './getToDosOfaProject'
import { project } from './createProject'
export { renderProjects } from './renderProjects'

console.log('ss');

var ag = new todo(1, 'agg','sdfsd','fassrg','fdddd')
var project1 = new project('test')
console.log(project1._projectId)
console.log(ag._description)

localStorage.setItem('1',ag.values)

console.log(getToDosOfaProject(1))

renderProjects()

