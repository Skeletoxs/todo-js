import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componetes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml (todo) );// esta linea es igual que la de abajo
todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );