import { geoLocationTypes } from "./types";

const INITIAL_STATE = {
  location: null,
  error: false,
  pending: true,
};

export const geoLocationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case geoLocationTypes.GET_GEO_LOCATION_SUCCESS:
      return {
        ...state,
        location: action.payload,
        pending: false,
      };
    case geoLocationTypes.GET_GEO_LOCATION_PENDING:
      return {
        ...state,
        pending: true,
      };
    case geoLocationTypes.GET_GEO_LOCATION_FAILED:
      return {
        ...state,
        pending: false,
        error: true,
      };

    default:
      return state;
  }
};

const INITIAL_STATE_WEATHER = {
  isPending: false,
  data: null,
  error: null,
};
export const weatherReducer = (state = INITIAL_STATE_WEATHER, action) => {
  switch (action.type) {
    case geoLocationTypes.FETCH_WEATHER_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case geoLocationTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isPending: false,
      };
    case geoLocationTypes.FETCH_WEATHER_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
