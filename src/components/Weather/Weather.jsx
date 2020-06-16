import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getGeoLocation,
  getWeatherReport,
} from "../../redux/geoLocation/actions";
import "./Weather.scss";
const Weather = ({
  locationCoordinates,
  locationPending,
  getGeoLocation,
  getWeatherReport,
  weatherData,
  weatherPending,
}) => {
  const [weatherDetail, setWeatherDetail] = useState({
    currentTemperature: null,
  });
  useEffect(() => {
    getGeoLocation();
  }, [getGeoLocation]);

  useEffect(() => {
    if (!locationPending && locationCoordinates !== undefined) {
      getWeatherReport(locationCoordinates);
    }
  }, [locationPending, locationCoordinates, getWeatherReport]);
  useEffect(() => {
    if (!weatherPending && weatherData !== null) {
      setWeatherDetail((prevState) => ({
        ...prevState,
        currentTemperature: (weatherData.data.main.temp - 273).toFixed(1),
      }));
    }
  }, [weatherPending, weatherData]);
  return (
    <div>
      {locationPending ? (
        <h2>Asking for geoLocation</h2>
      ) : (
        <div>
          {!weatherPending && weatherData !== null ? (
            <div className="weather-container effect3">
              <div>
                <h4>{weatherData.data.name}</h4>
                <h2>{weatherDetail.currentTemperature + " "}&#8451;</h2>
              </div>
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
                  alt="weather-icon"
                />
              </div>
            </div>
          ) : (
            <h4>fetching weather ...</h4>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({
  geoLocation: { pending, location },
  weather: { data, isPending },
}) => ({
  locationPending: pending,
  locationCoordinates: location,
  weatherData: data,
  weatherPending: isPending,
});
const mapDispatchToProps = (dispatch) => ({
  getGeoLocation: () => dispatch(getGeoLocation()),
  getWeatherReport: (data) => dispatch(getWeatherReport(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
