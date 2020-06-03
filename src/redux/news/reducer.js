import { newsTypes } from "./types";

const INITIAL_STATE = {
  newsListData: null,
  error: null,
  pending: false,
};

export function newsListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case newsTypes.FETCH_NEWS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case newsTypes.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        newsListData: action.payload,
      };

    case newsTypes.FETCH_NEWS_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
