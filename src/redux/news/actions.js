import { newsTypes } from "./types";

export const requestNews = (country) => ({
  type: newsTypes.FETCH_NEWS_PENDING,
  country,
});

export const receiveNews = (newsData) => ({
  type: newsTypes.FETCH_NEWS_SUCCESS,
  payload: newsData,
});
export const errorReceivingNews = (error) => ({
  type: newsTypes.FETCH_NEWS_FAILED,
  payload: error,
});
