import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import chatHistoryReducer from "./chatHistoryReducer";
import itemsReducer from "./itemsReducer";
import userItemsReducer from "./userItemsReducer"

const rootReducer = combineReducers({
    authenticationReducer:authenticationReducer,
    chatHistoryReducer:chatHistoryReducer,
    itemsReducer:itemsReducer,
    userItemsReducer:userItemsReducer

});

export default rootReducer;