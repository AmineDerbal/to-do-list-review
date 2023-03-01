/**
 * @jest-environment jsdom
 */
import Todo from "./src/modules/Todo.js";
import Task from "./src/modules/Task.js";

describe('add and delete task', () =>{
    test('add to the empty list',() => {
        const todo = new Todo ()
        expect (todo.addTask(new Task('Greetings'))).toEqual([
            {
                description: 'Greetings',
                index:1,
                completed: false,            
            }
        ])

    })
    test('delete the one task from the list',() =>{
        const todo =new Todo ()
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
          expect (todo .removeTask(2)).toEqual([
            
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
          
        ])
    } )
})