import { geoLocationTypes } from "./types";
import Axios from "axios";
export function getGeoLocation() {
  /* if ("geolocation" in navigator) {
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
  } */
  return (dispatch) => {
    dispatch({
      type: geoLocationTypes.GET_GEO_LOCATION_PENDING,
    });
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      dispatch({
        type: geoLocationTypes.GET_GEO_LOCATION_SUCCESS,
        payload: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    });
    if (!navigator.geolocation) {
      dispatch({
        type: geoLocationTypes.GET_GEO_LOCATION_FAILED,
      });
    }
    /* .catch((error) =>
        
      ); */
  };
}

export function getWeatherReport({ latitude, longitude }) {
  console.log("latitude", latitude);
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=48e1d541b5f45f74de028c9c43d25296`;
  return function (dispatch) {
    dispatch({
      type: geoLocationTypes.FETCH_WEATHER_PENDING,
    });
    Axios.get(url)
      .then((response) =>
        dispatch({
          type: geoLocationTypes.FETCH_WEATHER_SUCCESS,
          payload: response,
        })
      )
      .catch((error) =>
        dispatch({
          type: geoLocationTypes.FETCH_WEATHER_FAILED,
          payload: error,
        })
      );
  };
}
