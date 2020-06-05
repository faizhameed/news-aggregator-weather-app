import { combineReducers } from "redux";
import { newsListReducer } from "./redux/news/reducer";
import {
  geoLocationReducer,
  weatherReducer,
} from "./redux/geoLocation/reducer";

export const rootReducer = combineReducers({
  newsList: newsListReducer,
  geoLocation: geoLocationReducer,
  weather: weatherReducer,
});
