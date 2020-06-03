import { newsTypes } from "./types";
import Axios from "axios";

export const requestNews = () => {
  let url =
    "https://gnews.io/api/v3/top-news?token=db9f2b7ed1de35a753578fa3022c9a7b";
  return function (dispatch) {
    dispatch({
      type: newsTypes.FETCH_NEWS_PENDING,
    });

    Axios.get(url)
      .then((response) =>
        dispatch({
          type: newsTypes.FETCH_NEWS_SUCCESS,
          payload: response,
        })
      )

      .catch((error) =>
        dispatch({
          type: newsTypes.FETCH_NEWS_FAILED,
          payload: error,
        })
      );
  };
};
