// src/components/BlogPage/BlogPostPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { dogArticles, catArticles } from "../../data/blogData";
import "./BlogPostPage.css"; // Optional: add your styles

const BlogPostPage = () => {
  // Get parameters from the URL: category and id
  const { category, id } = useParams();
  const articleId = parseInt(id, 10);
  
  // Choose the right articles array based on category
  const articles = category === "dog" ? dogArticles : catArticles;
  const article = articles.find((a) => a.id === articleId);

  // If the article is not found, show a message
  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="blog-post-page">
      <Link to="/blogs" className="back-link">← Back to Blog</Link>
      <h1 className="post-title">{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="post-image" />
      <div className="post-content">
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;
