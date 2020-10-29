import { all } from "redux-saga/effects";
import newsSaga from "../news/newsSaga";

export default function* rootSaga() {
  yield all([newsSaga()]);
}
