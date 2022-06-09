import { combineReducers } from "redux";
import counter from './counter';
import news from './news';

const rootReducer = combineReducers({
  counter,
  news
});

export default rootReducer;