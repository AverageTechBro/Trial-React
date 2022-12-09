import React from "react";
import "./Article.css";
const Article = ({ picture, date, header, message }) => {
  return (
    <div className="gpt3__blog-container_article  ">
      <div className="gpt3__blog-container_article-image">
        <img src={picture} alt="" />
      </div>
      <div className="gpt3__blog-container_article-content gradient__bg ">
        <p className="gpt3__blog-container-article-content-date">{date}</p>
        <h3 className="gpt3__blog-container_article-content-header">
          {header}
        </h3>
        <p className="gpt3__blog-container_article-content-message">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Article;
