import todoListConst from '../constant/todoListConst';
import {createAction, createActions, combineActions} from 'redux-actions';

// createAction使用
const addItem = createAction(todoListConst.ADD_ITEM, (item) => ({todoList: item}));
const delItem = createAction(todoListConst.DEL_ITEM, (id) => ({id}));

/*
// 基本action Creator
function addItem(item) {
    return {
        type: todoListConst.ADD_ITEM,
        payload: {
            todoList: item
        }
    }
}

function delItem(id) {
    return {
        type: todoListConst.DEL_ITEM,
        payload: {
            id
        }
    }
}
*/

export default {
    addItem,
    delItem
}

/*
// createActions的使用
export default createActions({
    [todoListConst.ADD_ITEM]: (item) => ({todoList: item}) ,
    [todoListConst.DEL_ITEM]: (id) => ({id})
});
*/
