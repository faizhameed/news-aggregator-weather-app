import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootSaga from "./redux/sagas/index";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const logger = createLogger();
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
