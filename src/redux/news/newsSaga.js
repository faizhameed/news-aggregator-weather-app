import { call, put, takeEvery } from "redux-saga/effects";
import { newsTypes } from "./types";
import Axios from "axios";
import { errorReceivingNews, receiveNews } from "./actions";

const requestNews = async (country) => {
  console.log("at sagas");
  country = country.toLowerCase();
  let url = `https://gnews.io/api/v3/search?q=${country}&country=${country}&token=db9f2b7ed1de35a753578fa3022c9a7b`;
  const data = await Axios.get(url)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
  return data;
};

function* fetchNews(action) {
  const news = yield call(requestNews, action.country);
  try {
    yield put(receiveNews(news));
  } catch (error) {
    yield put(errorReceivingNews(error));
  }
}

function* newsSaga() {
  yield takeEvery(newsTypes.FETCH_NEWS_PENDING, fetchNews);
}

export default newsSaga;
