import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk];
const logger = createLogger();
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
