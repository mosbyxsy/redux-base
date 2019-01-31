import todoListConst from '../constant/todoListConst';
import {createAction, createActions} from 'redux-actions';

const addItem = createAction(todoListConst.ADD_ITEM, (item) => ({todoList: item}));

/*function addItem(item) {
    return {
        type: todoListConst.ADD_ITEM,
        payload: {
            todoList: item
        }
    }
}*/

function delItem(id) {
    return {
        type: todoListConst.DEl_ITEM,
        payload: {
            id
        }
    }
}

/*
export default {
    addItem,
    delItem
}*/

export default createActions({
    [todoListConst.ADD_ITEM]: (item) => ({todoList: item}) ,
    [todoListConst.DEl_ITEM]: (id) => ({id})
});
