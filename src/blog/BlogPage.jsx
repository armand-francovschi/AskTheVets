// src/components/BlogPage/BlogPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dogArticles, catArticles } from "../../data/blogData";
import "./BlogPage.css";
import Navbar from "../navbar/Navbar";

const BlogPage = () => {
  // Track which category is selected: "dog" or "cat"
  const [selectedCategory, setSelectedCategory] = useState("dog");
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Get the articles for the selected category
  const articles = selectedCategory === "dog" ? dogArticles : catArticles;

  // The first article is the featured article
  const featuredArticle = articles[0];
  // The remaining articles go in the carousel
  const carouselArticles = articles.slice(1);

  return (
    <div className="blog-page-container">
      {/* Category Selector */}
      <Navbar/>
      <div className="blog-category-selector">
        <button
          className={`big-category-button ${selectedCategory === "dog" ? "active" : ""}`}
          onClick={() => handleCategoryChange("dog")}
        >
          Dog
        </button>
        <button
          className={`big-category-button ${selectedCategory === "cat" ? "active" : ""}`}
          onClick={() => handleCategoryChange("cat")}
        >
          Cat
        </button>
      </div>

      {/* Featured Article Section */}
      {featuredArticle && (
        <div className="featured-article">
          <img
            src={featuredArticle.imageUrl}
            alt={featuredArticle.title}
            className="featured-article-image"
          />
          <div className="featured-article-content">
            <h2 className="featured-article-title">{featuredArticle.title}</h2>
            <p className="featured-article-excerpt">{featuredArticle.excerpt}</p>
            {/* Read More link */}
            <Link
              to={`/blogs/${selectedCategory}/${featuredArticle.id}`}
              className="read-more-link"
            >
              Read More
            </Link>
          </div>
        </div>
      )}

      {/* Carousel Section */}
      {carouselArticles.length > 0 && (
        <div className="carousel-container">
          {carouselArticles.map((article) => (
            <div key={article.id} className="carousel-item">
              <img src={article.imageUrl} alt={article.title} className="carousel-item-image" />
              <h3 className="carousel-item-title">{article.title}</h3>
              <p className="carousel-item-excerpt">{article.excerpt}</p>
              {/* Read More link for each carousel item */}
              <Link
                to={`/blogs/${selectedCategory}/${article.id}`}
                className="read-more-link"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
