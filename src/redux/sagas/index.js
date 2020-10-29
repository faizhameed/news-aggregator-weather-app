import { all } from "redux-saga/effects";
import geoSaga from "../geoLocation/geoSaga";
import newsSaga from "../news/newsSaga";

export default function* rootSaga() {
  yield all([newsSaga(), geoSaga()]);
}
