import { todo } from './createToDo'
import { getToDosOfaProject } from './getToDosOfaProject'

console.log('ss');

var ag = new todo(1, 'agg','sdfsd','fassrg','fdddd')

console.log(ag._description)


localStorage.setItem('session',ag.values)


console.log(getToDosOfaProject(1))