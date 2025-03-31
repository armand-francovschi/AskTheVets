// src/components/BlogPage/BlogArticlesGrid.jsx
import React from "react";
import "./BlogPage.css"; // or separate file if you prefer

const BlogArticlesGrid = ({ articles }) => {
  return (
    <div className="articles-grid">
      {articles.map((article) => (
        <div className="article-card" key={article.id}>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="article-card-image"
          />
          <h3 className="article-card-title">{article.title}</h3>
          <p className="article-card-excerpt">{article.excerpt}</p>
          {/* Add "Read More" or link to detail page if desired */}
        </div>
      ))}
    </div>
  );
};

export default BlogArticlesGrid;
