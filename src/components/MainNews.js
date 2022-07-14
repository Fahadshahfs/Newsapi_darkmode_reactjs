import Newslist from "./Newslist";
import React, { useEffect, useState } from "react";

const MainNews = (props) => {
  const [news, setNews] = useState([]);

  const newsData = async () => {
    const base_url = "https://saurav.tech/NewsAPI/";
    const response = await fetch(
      base_url + `everything/${props.setNewscategory}.json`
    );
    const data = await response.json();
    setNews(data.articles);
  };
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    newsData();
  }, []);

  return (
    <>
      <div className="container my-3 h-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <h1
            className={`text-${
              props.screenMoode === "light" ? "dark" : "light"
            }`}
          >
            Latest News From {props.setSource}
          </h1>
          {news.map((element) => (
            <div className="col-md-4">
              <Newslist
                newsUrl={element.url}
                key={element.url}
                description={element.description.slice(0, 80)}
                imgUrl={element.urlToImage}
                title={element.title.slice(0, 40)}
                screenMode={props.screenMoode}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainNews;
