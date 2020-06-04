import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGeoLocation } from "../../redux/geoLocation/actions";

const Weather = ({ locationCoordinates, locationPending, getGeoLocation }) => {
  useEffect(() => {
    getGeoLocation();
  }, [getGeoLocation]);
  return (
    <div>
      {locationPending ? (
        <h2>Asking for geoLocation</h2>
      ) : (
        <div>location in</div>
      )}
    </div>
  );
};

const mapStateToProps = ({ geoLocation: { pending, location } }) => ({
  locationPending: pending,
  locationCoordinates: location,
});
const mapDispatchToProps = (dispatch) => ({
  getGeoLocation: () => dispatch(getGeoLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
