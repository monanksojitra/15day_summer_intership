import React, { useEffect, useState } from "react";

const NewsCards = () => {
  const [latestHeadlines, setLatestHeadlines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const url =
      //   "https://newsapi.org/v2/top-headlines?" +
      //   "country=us&" +
      //   "apiKey=c65ade5e1b864061ad7ad09396eb3232";
      // const url = "https://inshortsapi.vercel.app/news?category=sports";
      const url = "https://inshortsapi.vercel.app/news?category=all";
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setLatestHeadlines(json.data);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-md-3 text-center ">
        {latestHeadlines.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsCards;

const NewsCard = ({ article }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-body">
          <img src={article.imageUrl} className="mb-2" width={300} />
          <h5 className="card-title pricing-card-title">
            <small className="text-body-dark fw-dark">{article.title}</small>
          </h5>
          <ul className="list-unstyled mt-3 mb-4">
            <li>
              {article.content}
              <span>
                {" "}
                <br></br>by{" "}
              </span>
              {article.author}
            </li>
            <li>
              <a href={article.readMoreUrl}>read more..</a>
            </li>
          </ul>
          {article.time}
          <span> </span>
          {article.date}
        </div>
      </div>
    </div>
  );
};
