import React from "react";
import { connect } from "react-redux";
import "./NewsList.scss";

const NewsList = ({ newsListData, pending }) => {
  return (
    <div className="news-container">
      {!pending && newsListData
        ? newsListData.data.articles.map((article) => {
            return (
              <div className="newslist" key={article.url}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h2>{article.title}</h2>
                </a>
                <p>{article.source.name}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
const mapStateToProps = ({ newsList: { newsListData, pending } }) => ({
  newsListData,
  pending,
});
export default connect(mapStateToProps)(NewsList);
