import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getGeoLocation,
  getWeatherReport,
} from "../../redux/geoLocation/actions";

const Weather = ({
  locationCoordinates,
  locationPending,
  getGeoLocation,
  getWeatherReport,
  weatherData,
  weatherPending,
}) => {
  useEffect(() => {
    getGeoLocation();
  }, [getGeoLocation]);

  useEffect(() => {
    if (!locationPending && locationCoordinates !== undefined) {
      console.log("getWeatherReport", locationCoordinates.latitude);
      getWeatherReport(locationCoordinates);
    }
  }, [locationPending, locationCoordinates]);
  return (
    <div>
      {locationPending ? (
        <h2>Asking for geoLocation</h2>
      ) : (
        <div>
          {!weatherPending && weatherData !== null ? (
            <React.Fragment>
              <h4>{weatherData.data.name}</h4>
              <h5>{weatherData.data.main.temperature}</h5>
            </React.Fragment>
          ) : (
            <h4>How here</h4>
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
