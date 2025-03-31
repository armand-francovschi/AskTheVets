// src/components/BlogPage/BlogCategorySelector.jsx
import React from "react";

const BlogCategorySelector = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="blog-category-selector">
      <button
        className={selectedCategory === "dog" ? "active" : ""}
        onClick={() => onCategoryChange("dog")}
      >
        Dog
      </button>
      <button
        className={selectedCategory === "cat" ? "active" : ""}
        onClick={() => onCategoryChange("cat")}
      >
        Cat
      </button>
    </div>
  );
};

export default BlogCategorySelector;
