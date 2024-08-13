import { getLastListId } from "../localStorageManager/manageStorage";
import { Todo } from "./todo";

/**
 * Holds the Todo Objects in form of a list.
 * @param {String} listName the list name that will hold the todos
 * @returns the public methods.
 */
export function TodoList(id, listName) {
    this.id = id;
    this.list = new Array();
    this.listName = listName;
    this.types = new Array();

    /**
     * This method returns the id of the todoList.
     * @returns the id of the todoList
     */
    const getId = () => {
        return this.id;
    }

    /**
     * This method adds a todo object to the todoList.
     * @param {Todo} todo this a todo object we want to add to the todoList.
     */
    const addTodo = (todo) => {
        this.list.push(todo);
    }

    const getTodoList = () => {
        return this.list;
    }

    const getListName = () => {
        this.listName;
    }

    const updateListName = (updatedListName) => {
        this.listName = updatedListName;
    }

    const addTypes = (type) => {
        this.types.push(type);
    }

    const getTypes = () => {
        return this.types;
    }

    const removeFromTodoList = (index) => {
        if(index < this.list.length()){
            this.list.splice(index,1);
        }
    }

    const getListData = () => {
        return {
            'id': this.id,
            'list': this.list,
            'listName': this.listName,
            'types': this.types,
        }
    }

    const getListDataObject = () => {
        return {
            'id': this.id,
            'listName': this.listName,
            'list': getTodoListJson(this.list),
            'types': this.types
        }
    }

    function getTodoListJson(listData) {
        let todoListObject = {};
        listData.forEach(todo => {
            todoListObject[todo.getId()] = todo.getCompleteInfo();
        });
        return todoListObject;
    }

    return { getId, addTodo, getTodoListJson, getTodoList, getListName, updateListName, addTypes, getTypes, removeFromTodoList, getListData, getListDataObject };
}