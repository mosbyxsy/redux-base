import todoListConst from '../constant/todoListConst';

function add_item(item) {
    return {
        type: todoListConst.ADD_ITEM,
        payload: {
            todoList: item
        }
    }
}

function del_item(id) {
    return {
        type: todoListConst.DEl_ITEM,
        payload: {
            id
        }
    }
}

export default {
    add_item,
    del_item
}