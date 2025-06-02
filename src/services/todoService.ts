import { Todo, TodoStatus } from '../models/todo.model';

let todos: Todo[] = [
  {
    id: '1',
    name: 'Learn TypeScript',
    description: 'Learn the basics of TypeScript',
    status: TodoStatus.Complete,
  },
  {
    id: '2',
    name: 'Build a Todo API',
    description: 'Build a REST API for managing todos',
    status: TodoStatus.InProgress,
  },
  {
    id: '3',
    name: 'Write documentation',
    description: 'Write documentation for the project',
    status: TodoStatus.New,
  },
];

export const getAllTodos = (): Todo[] => {
  return todos;
};

export const getTodoById = (id: string): Todo | undefined => {
  return todos.find(todo => todo.id === id);
};

export const createTodo = (todo: Todo): Todo => {
  todos.push(todo);
  return todo;
};

export const updateTodo = (id: string, updatedTodo: Todo): Todo | undefined => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    return todos[index];
  }
  return undefined;
};

export const deleteTodo = (id: string): boolean => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};
