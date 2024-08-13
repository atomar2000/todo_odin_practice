import { TodoList } from "../TodoObjects/TodoList";
import { Todo } from "../TodoObjects/todo";

/**
 * Parses the local storage and creates objects that can be used to manipulate data.
 * @param {*} localObject The current state of the todo list object in the application
 * @returns the current todo list state of the app
 */
export function parseLocalStorage(localObject) {
    let currTodoState = [];
    Object.entries(localObject).map(entry => {
        let key = entry[0];
        let value = entry[1];
        const todoList = new TodoList(key, value.listName);
        Object.entries(value.list).map(todoMap => {
            const todos = todoMap[1];
            console.log("parsingData from localStorage: ", todos);
            const todo = new Todo(todos.id, todos.title, todos.desc, todos.dueDate, todos.priority, todos.notes, todos.checkList, todos.type);
            todoList.addTodo(todo);
        });
        currTodoState.push(todoList);
    });
    return currTodoState;
}