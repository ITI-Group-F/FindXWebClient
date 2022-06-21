import {createStore, compose} from 'redux';
import rootReducer from './Reducers/rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const isDev = process.env.NODE_ENV === "development";
const store = isDev
                    ? createStore(rootReducer, composeEnhancers())
                    : createStore(rootReducer);

export default store;