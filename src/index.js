import { clearLocalStorage, getCurrentState, getLastListId, getLastTodoId, saveCurrentState } from "./localStorageManager/manageStorage";
import { parseLocalStorage } from "./localStorageManager/parseLocalStorage";
import { Todo } from "./TodoObjects/todo";
import { TodoList } from "./TodoObjects/TodoList";

// create a console based Todo List.
// const todo = new Todo(getLastTodoId(), "Todo1", "todo description", "2000/12/11", 1, "notes related to this note.", ["CheckList","Checklist2"]);
// const todo1 = new Todo(getLastTodoId(), "Todo2", "todo description", "2000/12/11", 1, "notes related to this note.", ["CheckList","Checklist2"]);
// const todo2 = new Todo(getLastTodoId(),"Todo3", "todo description", "2000/12/11", 1, "notes related to this note.", ["CheckList","Checklist2"]);
// const todo3 = new Todo(getLastTodoId(),"Todo4", "todo description", "2000/12/11", 1, "notes related to this note.", ["CheckList","Checklist2"]);
// const todo4 = new Todo(getLastTodoId(),"Todo5", "todo description", "2000/12/11", 1, "notes related to this note.", ["CheckList","Checklist2"]);

// const todoList1 = new TodoList(getLastListId(), "list1");
// todoList1.addTodo(todo);
// todoList1.addTodo(todo1);
// todoList1.addTodo(todo2);
// todoList1.addTodo(todo3);
// todoList1.addTodo(todo4);

// todoList1.addTypes("checks1");
// todoList1.addTypes("checks2");
// todoList1.addTypes("checks3");

let currState = getCurrentState();
// currState[todoList1.getId()] = todoList1.getListDataObject();

saveCurrentState(currState);

console.log(currState);

const parsedFromLocalStorage = parseLocalStorage(currState);

console.log('parsedData: ', parsedFromLocalStorage);

console.log(parsedFromLocalStorage[0]?.getListData());

console.log(parsedFromLocalStorage[0]?.getTodoList()[0]);

// clearLocalStorage();
