import { geoLocationTypes } from "./types";

export function getGeoLocation() {
  console.log("its a funcrion");
  if ("geolocation" in navigator) {
    let coordinates = {};
    navigator.geolocation.getCurrentPosition(function (position) {
      coordinates["latitude"] = position.coords.latitude;
      coordinates["longitude"] = position.coords.longitude;
    });

    return {
      type: geoLocationTypes.GET_GEO_LOCATION_SUCCESS,
      payload: coordinates,
    };
  } else {
    return {
      type: geoLocationTypes.GET_GEO_LOCATION_FAILED,
    };
  }
}
