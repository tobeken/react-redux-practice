import { combineReducers } from "redux";
import counterReducer from "./counter";
import isloginReducer from "./isLoging";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogin: isloginReducer,
});

export default allReducers