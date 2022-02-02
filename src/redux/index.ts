import { combineReducers } from "redux"
import filterReducer from './filter';
import requestReducer from "./requests";

const rootReducer = combineReducers({filter:filterReducer,requests:requestReducer});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;