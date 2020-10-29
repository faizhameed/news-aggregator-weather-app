import { takeEvery, put, call } from "redux-saga/effects";
import { failedGeoLocation, receiveGeoLocation } from "./actions";
import { geoLocationTypes } from "./types";

const requestGeoLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => resolve(location),
      (error) => reject(error)
    );
  });

function* fetchGeoLocation(action) {
  const position = yield call(requestGeoLocation);
  const { latitude, longitude } = position.coords;
  console.log("data", { latitude, longitude });
  try {
    yield put(receiveGeoLocation({ latitude, longitude }));
  } catch (error) {
    yield put(failedGeoLocation(error.message));
  }
}

export default function* geoSaga() {
  yield takeEvery(geoLocationTypes.GET_GEO_LOCATION_PENDING, fetchGeoLocation);
}
