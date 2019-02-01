
// const doNothingMidddleware = ({dispatch, getState}) => next => action => next(action)
// 中间件其实就是修改dispatch
export default ({dispatch, getState}) => next => action => {
    console.log(getState(), action);
    return next(action);
}