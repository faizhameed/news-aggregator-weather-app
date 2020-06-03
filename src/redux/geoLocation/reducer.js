import { geoLocationTypes } from "./types";

const INITIAL_STATE = {
  location: null,
  error: null,
};

export const geoLocationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case geoLocationTypes.GET_GEO_LOCATION_SUCCESS:
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};
