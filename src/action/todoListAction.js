import todoListConst from '../constant/todoListConst';

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
        type: todoListConst.DEl_ITEM,
        payload: {
            id
        }
    }
}

export default {
    addItem,
    delItem
}