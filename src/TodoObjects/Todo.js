import { formatRelative, subDays } from "date-fns";
import { getLastTodoId } from "../localStorageManager/manageStorage";

/**
 * This object holds the structure of a todo
 * @param {String} title the title of the todo.
 * @param {String} desc the description of the todo.
 * @param {String} dueDate the Due Date of the todo. (YYYY/MM/DD)
 * @param {Number} priority the priority of this todo.
 * @param {String} notes the notes related to this todo.
 * @param {Object} checkList Checklist associated to this todo.
 */
export function Todo(id, title, desc, dueDate, priority, notes, checkList, type) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.notes = notes;
    this.checkList = checkList;
    this.completed = false;
    this.type = type;
    this.createDate = new Date();

    const getId = () => {
        return this.id;
    }

    const markTodoCompletd = () => {
        this.completed = true;
    }

    const isCompleted = () => {
        return this.completed;
    }

    const getBasicInfo = () => {
        return {
            'id': this.id,
            'title': this.title,
            'desc': this.desc,
            'dueDate': this.dueDate,
            'completed': this.completed,
            'type': this.type,
            'createDate': this.createDate
        };
    }

    const getCompleteInfo = () => {
        return {
            'id': this.id,
            'title': this.title,
            'desc': this.desc,
            'dueDate': this.dueDate,
            'completed': this.completed,
            'priority': this.priority,
            'notes': this.notes,
            'checkList': this.checkList,
            'type': this.type,
            'createDate': this.createDate
        }
    }

    return { getId, markTodoCompletd, isCompleted, getBasicInfo, getCompleteInfo };
}