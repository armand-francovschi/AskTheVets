// src/components/BlogPage/ArticleCard.jsx
import React from "react";
import "./ArticleCard.css"; // optional for styling

const ArticleCard = ({ article }) => {
  const { title, excerpt, imageUrl } = article;

  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <h3>{title}</h3>
      <p>{excerpt}</p>
      {/* Possibly a "Read More" button or link */}
    </div>
  );
};

export default ArticleCard;
