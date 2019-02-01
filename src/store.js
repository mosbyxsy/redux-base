import {createStore, applyMiddleware, compose} from 'redux';
import rootReducers from './reducers';
import {devToolsEnhancer, composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import logger from './middleware/logger';

// redux使用工具说明https://github.com/zalmoxisus/redux-devtools-extension
// 未使用插件集成开发者工具(未使用中间件)
// export default createStore(rootReducers, process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 使用插件集成开发者工具(未使用中间件)
// export default createStore(rootReducers, devToolsEnhancer());

// 使用插件集成开发着工具(使用中间件)
// export default createStore(rootReducers, composeWithDevTools(applyMiddleware(logger)));

/*
// 中间件使用方法1
const composeEnhancers = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducers, applyMiddleware(logger)); // 未集成开发者工具
export default createStore(rootReducers, composeEnhancers(applyMiddleware(logger))); // 集成开发者工具
*/

// 中间件使用方法2
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
export default createStoreWithMiddleware(rootReducers, devToolsEnhancer());
