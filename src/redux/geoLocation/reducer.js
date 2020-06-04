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
