// src/components/BlogPage/BlogPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dogArticles, catArticles } from "../../data/blogData";
import "./BlogPage.css";
import Navbar from "../navbar/Navbar";
import { useAuth } from "../context/AuthContext";

const BlogPage = () => {
  const { user, loginAsAdmin, loginAsUser, logout } = useAuth();

  // Selected category ("dog" or "cat")
  const [selectedCategory, setSelectedCategory] = useState("dog");

  // Helper function to determine itemsToShow based on screen width
  const getItemsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 5;
    if (width >= 768) return 3;
    return 1;
  };

  // Dynamic itemsToShow based on screen size
  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());
  // currentSlide tracks the index in our rendered (cloned) items array.
  const [currentSlide, setCurrentSlide] = useState(itemsToShow);
  // Toggle for CSS transition
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Update itemsToShow when window is resized
  useEffect(() => {
    const handleResize = () => {
      const newItemsToShow = getItemsToShow();
      setItemsToShow(newItemsToShow);
      // Reset current slide to avoid display issues.
      setCurrentSlide(newItemsToShow);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get articles based on selected category
  const articles = selectedCategory === "dog" ? dogArticles : catArticles;
  const featuredArticle = articles[0];
  const baseItems = articles.slice(1); // remaining articles

  // Clone the last 'itemsToShow' items to the beginning and the first 'itemsToShow' to the end.
  const clonesBefore = baseItems.slice(-itemsToShow);
  const clonesAfter = baseItems.slice(0, itemsToShow);
  const renderedItems = [...clonesBefore, ...baseItems, ...clonesAfter];

  // When switching categories, reset the carousel index.
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentSlide(itemsToShow);
  };

  // Advance by (itemsToShow - 1) slides.
  const handleNext = () => {
    setCurrentSlide((prev) => prev + (itemsToShow - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => prev - (itemsToShow - 1));
  };

  // Infinite loop logic: when currentSlide goes beyond valid range, reset without transition.
  useEffect(() => {
    if (currentSlide >= itemsToShow + baseItems.length) {
      const overshoot = currentSlide - (itemsToShow + baseItems.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(itemsToShow + overshoot);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500);
    } else if (currentSlide < itemsToShow) {
      const overshoot = itemsToShow - currentSlide;
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(itemsToShow + baseItems.length - overshoot);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500);
    }
  }, [currentSlide, baseItems.length, itemsToShow]);

  // Calculate translation percentage for the carousel.
  const translatePercentage = currentSlide * (100 / renderedItems.length);

  return (
    <div className="blog-page-container">
      <Navbar />

      

      {/* Category Selector */}
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
            <Link
              to={`/blogs/${selectedCategory}/${featuredArticle.id}`}
              className="read-more-link"
            >
              Read More
            </Link>
            {/* Only admin can see the edit link */}
            {user.role === "admin" && (
              <Link
                to={`/blogs/${selectedCategory}/edit/${featuredArticle.id}`}
                className="big-category-button"
              >
                Edit Article
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Infinite Loop Carousel Section */}
      {baseItems.length > 0 && (
        <div className="carousel-wrapper">
          <button className="carousel-control left" onClick={handlePrev}>
            &#60;
          </button>
          <div className="carousel-viewport">
            <div
              className="carousel-container"
              style={{
                transform: `translateX(-${translatePercentage}%)`,
                transition: isTransitioning ? "transform 0.5s ease" : "none",
                width: `${(renderedItems.length * 100) / itemsToShow}%`,
              }}
            >
              {renderedItems.map((article, index) => (
                <div key={index} className="carousel-item">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="carousel-item-image"
                  />
                  <h3 className="carousel-item-title">{article.title}</h3>
                  <p className="carousel-item-excerpt">{article.excerpt}</p>
                  <Link
                    to={`/blogs/${selectedCategory}/${article.id}`}
                    className="read-more-link"
                  >
                    Read More
                  </Link>
                  {/* Admin-only: Edit button */}
                  {user.role === "admin" && (
                    <Link
                      to={`/blogs/${selectedCategory}/edit/${article.id}`}
                      className="edit-link"
                    >
                      Edit
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-control right" onClick={handleNext}>
            &#62;
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
