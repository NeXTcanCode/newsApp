import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // const apiKey = import.meta.env.VITE_API_KEY;
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=515f3cee49c747f9bb55770fb76f6db1`;
    // console.log(import.meta.env.VITE_API_KEY);

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((data) => {
        console.log(data);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles &&
        articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            ></NewsItem>
          );
        })}
    </div>
  );
};

export default Newsboard;
