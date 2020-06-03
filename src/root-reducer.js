import { combineReducers } from "redux";
import { newsListReducer } from "./redux/news/reducer";

export const rootReducer = combineReducers({
  newsList: newsListReducer,
});
