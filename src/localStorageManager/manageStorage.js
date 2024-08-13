/**
 * Checks if the storage is available in the browser.
 * @param {*} type this is the storage type (like: localStorage)
 * @returns true if the storage is available else false.
 */
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x,x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === 'QuotaExceededError' &&
            storage && 
            storage.length !== 0
        );
    }
}

/**
 * This method returns the Next Id that can be used for the TodoList.
 * @returns -1 if the storage is unavailable, else return the next id for the List.
 */
export function getLastListId() {
    if(storageAvailable('localStorage')){
        let storage = window['localStorage'];
        let lastId = storage.getItem("lastId_todoList");
        if(lastId === null) {
            lastId = 0;
        }
        storage.setItem("lastId_todoList", `${Number(lastId) + Number(1)}`)
        return Number(lastId) + Number(1);
    } else {
        return -1;
    }
}

/**
 * This method returns the next id for the todoCard.
 * @returns returns the next id for the todo card if storage is available, else return -1.
 */
export function getLastTodoId() {
    if(storageAvailable('localStorage')){
        let storage = window['localStorage'];
        let lastId = storage.getItem("lastId_todoCard");
        if(lastId === null) {
            lastId = 0;
        }
        storage.setItem("lastId_todoCard", `${Number(lastId) + Number(1)}`)
        return Number(lastId) + Number(1);
    } else {
        return -1;
    }
}

/**
 * This method saves the current state of the application.
 * @param {*} allData This is a JS object for the current state of the app.
 * @returns true if current state was succcesfully saved else return false.
 */
export function saveCurrentState(allData) {
    console.log("allData: ", JSON.stringify(allData));
    if(storageAvailable('localStorage')){
        let storage = window['localStorage'];
        storage.setItem("todoList_state_latest", JSON.stringify(allData));
        return true;
    } else {
        return false;
    }
}

/**
 * This method will return the saved object if localStorage is available else return {}.
 * @returns returns the JSON parsed object of the saved LocalStorage object else return {}.
 */
export function getCurrentState(){
    if(storageAvailable('localStorage')){
        let storage = window['localStorage'];
        let todoList_state_latest = JSON.parse(storage.getItem("todoList_state_latest"));
        return todoList_state_latest ? todoList_state_latest : {};
    } else {
        return {};
    }
}

/**
 * This method clears the localStorage.
 * @returns true if cache was cleared succesfully else return false.
 */
export function clearLocalStorage() {
    if(storageAvailable('localStorage')){
        let storage = window['localStorage'];
        storage.clear();
        return true;
    } else {
        return false;
    }
}