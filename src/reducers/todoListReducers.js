import todoListConst from '../constant/todoListConst';
import {handleAction, handleActions, combineActions} from 'redux-actions';
import todoListAction from '../action/todoListAction';

const initState = {
    todoList: []
};

// reducers基本使用
export default function (state = initState, action) {
    switch (action.type) {
        case todoListConst.ADD_ITEM: return {
            ...state,
            todoList: [...state.todoList, action.payload.todoList]
        }
        case todoListConst.DEL_ITEM: return {
            ...state,
            todoList: state.todoList.filter(item => item.id !== action.payload.id)
        }
        default: return state;
    }
}

/*
// handleActions使用，key可以是action Creator
export default handleActions({
    [todoListAction.addItem]: (state, action) => ({...state, todoList: [...state.todoList, action.payload.todoList]}),
    [todoListAction.delItem]: (state, action) => ({...state, todoList: state.todoList.filter(item => item.id !== action.payload.id)})
}, initState);
*/

/*
// handleActions使用，key可以是常量
export default handleActions({
    [todoListConst.ADD_ITEM]: (state, action) => ({...state, todoList: [...state.todoList, action.payload.todoList]}),
    [todoListConst.DEL_ITEM]: (state, action) => ({...state, todoList: state.todoList.filter(item => item.id !== action.payload.id)})
}, initState);
*/

/*
// handleActions,combineActions使用
export default handleActions({
    [combineActions(todoListAction.addItem, todoListAction.delItem)]: (state, action) => ({...state, todoList: [...state.todoList, action.payload.todoList]})
}, initState);
*/

/*
// handleAction 第一个参数可以是常量也可以是action Creator
export default handleAction(todoListConst.ADD_ITEM, (state, action) => ({...state, todoList: [...state.todoList, action.payload.todoList]}), initState);
export default handleAction(todoListAction.addItem, (state, action) => ({...state, todoList: [...state.todoList, action.payload.todoList]}), initState);
*/
