
// const doNothingMidddleware = ({dispatch, getState}) => next => action => next(action)
// const doNothingMidddleware = ({dispatch, getState}) => next => f(修改后的dispatch)
// 中间件其实就是修改dispatch
export default ({dispatch, getState}) => next => action => {
    console.log(getState(), action);
    return next(action);
}