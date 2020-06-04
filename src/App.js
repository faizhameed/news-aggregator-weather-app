import React, { useEffect } from "react";
import "./App.css";
import { requestNews } from "./redux/news/actions";
import { connect } from "react-redux";
import NewsList from "./components/NewsList/NewsList";
import Weather from "./components/Weather/Weather";

function App({ requestNews }) {
  useEffect(() => {
    requestNews();
    console.log("requesting news");
  }, [requestNews]);
  return (
    <div className="App">
      <Weather />
      <NewsList />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  requestNews: () => dispatch(requestNews()),
});

export default connect(null, mapDispatchToProps)(App);
