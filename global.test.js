/**
 * @jest-environment jsdom
 */

import Todo from './src/modules/Todo.js';
import Task from './src/modules/Task.js';
import { loadLocalStorage, checkLocalStorage } from './src/modules/data.js';

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const body = `<h1>My Todo List</h1>
<div id="todo-list-container">
  <div id="todo-day-container">
    <p>Today's To Do</p>
    <div id="refresh"></div>
  </div>
  <form id="add-task">
    <input id="add-task-text" type="text" maxlength="100" placeholder="Add to your list ..." />
    <img id="enter-Button" draggable="false" />
  </form>
  <ul id="todo-list-content"></ul>`;

describe('List manipulation', () => {
  test('add 1 task to the empty list', () => {
    const todo = new Todo();
    const task = new Task('hello');
    expect(todo.addTask(task)).toEqual([
      {
        description: 'hello',
        index: 1,
        completed: false,
      },
    ]);
  });

  test('delete 1 task from the list', () => {
    const todo = new Todo();
    todo.list = [
      {
        description: 'I am Here',
        index: 1,
        completed: true,
      },
      {
        description: 'myself is the greatest',
        index: 2,
        completed: false,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ];

    expect(todo.removeTask(1)).toEqual([
      {
        description: 'I am Here',
        index: 1,
        completed: true,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ]);
  });
  test('test edit task', () => {
    const todo = new Todo();
    todo.list = [
      {
        description: 'I am Here',
        index: 1,
        completed: true,
      },
      {
        description: 'myself is the greatest',
        index: 2,
        completed: false,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ];
    expect(todo.editTask(0, 'This is the best')).toEqual([
      {
        description: 'This is the best',
        index: 1,
        completed: true,
      },
      {
        description: 'myself is the greatest',
        index: 2,
        completed: false,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ]);
  });
  test('Clear all completed tasks', () => {
    const todo = new Todo();
    todo.list = [
      {
        description: 'I am Here',
        index: 1,
        completed: false,
      },
      {
        description: 'myself is the greatest',
        index: 2,
        completed: true,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ];
    expect(todo.filterCompleted()).toEqual([
      {
        description: 'I am Here',
        index: 1,
        completed: false,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ]);
  });
  test('update completed status', () => {
    const todo = new Todo();
    todo.list = [
      {
        description: 'I am Here',
        index: 1,
        completed: true,
      },
      {
        description: 'myself is the greatest',
        index: 2,
        completed: false,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ];
    expect(todo.toggleCompleted(1)).toEqual([
      {
        description: 'I am Here',
        index: 1,
        completed: true,
      },
      {
        description: 'myself is the greatest',
        index: 2,
        completed: true,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ]);
  });
});

describe('local storage', () => {
  test('if local storage exist or not', () => {
    localStorageMock.clear();
    expect(checkLocalStorage()).toBeFalsy();
    const todo = new Todo();
    todo.saveList();
    expect(checkLocalStorage()).toBeTruthy();
  });
  test('expect the local storage saved to equal the list', () => {
    const todo = new Todo();
    todo.list = [
      {
        description: '123',
        index: 1,
        completed: false,
      },
      {
        description: 'local test',
        index: 2,
        completed: true,
      },
    ];
    todo.saveList();
    expect(loadLocalStorage()).toEqual(todo.list);
  });
});
describe('Html Dom manipulation', () => {
  test('add list tasks to the dom as li elements', () => {
    const todo = new Todo();
    document.body.innerHTML = body;

    // add 1 task and render the DOM the number of li task should be 1
    todo.addTask(new Task('hello'));
    todo.renderList();
    expect(document.querySelectorAll('li').length).toBe(1);

    // add another task and render the DOM the number of li task should be 1
    todo.addTask(new Task('123'));
    todo.renderList();
    expect(document.querySelectorAll('li').length).toBe(2);
  });

  test('removing task from the dom element', () => {
    document.body.innerHTML = body;
    const todo = new Todo();
    todo.list = [
      {
        description: 'I am Here',
        index: 1,
        completed: true,
      },
      {
        description: 'myself is the greatest',
        index: 2,
        completed: false,
      },
      {
        description: 'this is a test',
        index: 3,
        completed: false,
      },
    ];
    // render the DOM expect number of li to be 3
    todo.renderList();
    expect(document.querySelectorAll('li').length).toBe(3);
    // remove 1 task render the Dom and expect the number of li to be 2
    todo.removeTask(0);
    todo.renderList();
    expect(document.querySelectorAll('li').length).toBe(2);
  });
  test('checkbox click', () => {
    const todo = new Todo();
    document.body.innerHTML = body;
    todo.addTask(new Task('Hello'));
    todo.renderList();
    document.querySelector('.checkbox[data-index="1"]').dispatchEvent(new Event('change'));
    expect(todo.list[0].index).toBeTruthy();
  });
});
