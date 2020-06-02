import { newsTypes } from "./types";

export const requestNews = (dispatch) => () => {
  return dispatch(
    fetch(
      "https://gnews.io/api/v3/top-news?token=db9f2b7ed1de35a753578fa3022c9a7b"
    )
  );
};
