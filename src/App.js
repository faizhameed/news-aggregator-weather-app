import React, { useEffect } from "react";
import "./App.css";
import { requestNews } from "./redux/news/actions";
import { connect } from "react-redux";
import NewsList from "./components/NewsList/NewsList";
import Weather from "./components/Weather/Weather";

function App({ requestNews, data }) {
  useEffect(() => {
    if (data !== null) {
      requestNews(data.data.sys.country);
    }
  }, [requestNews, data]);
  return (
    <div className="App">
      <Weather />
      <NewsList />
    </div>
  );
}

const mapStateToProps = ({ weather: { data } }) => ({
  data,
});

const mapDispatchToProps = (dispatch) => ({
  requestNews: (country) => dispatch(requestNews(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
