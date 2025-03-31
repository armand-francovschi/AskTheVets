import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./BlogPreview.css";
import { Link } from "react-router-dom";

const BlogPreview = () => {
    const history = useNavigate(); // React Router Hook for navigation

    const handleSeeMoreClick = () => {
        // Redirect to the Blog page (can be adjusted if you're using routes)
        navigate("/blogs");
    };

    return (
        <div className="blog-preview-container">
            <h2>Latest Blog Articles</h2>
            <div className="blog-cards-container">
                <div className="blog-card">
                    <img
                        src="https://woofwagwalk.co.uk/wp-content/uploads/2025/02/3H5A5700.jpg"
                        alt="Blog Article 1"
                        className="blog-image"
                    />
                    <h3 className="blog-title">Blog Article 1</h3>
                    <div className="blog-text">
                        <p className="blog-snippet">
                            This is a short snippet of the first blog article. It gives a preview of the content and invites the reader to click to read more.
                        </p>
                    </div>
                </div>

                <div className="blog-card">
                    <img
                        src="https://woofwagwalk.co.uk/wp-content/uploads/2025/02/3H5A5700.jpg"
                        alt="Blog Article 1"
                        className="blog-image"
                    />
                    <h3 className="blog-title">Blog Article 2</h3>
                    <div className="blog-text">
                        <p className="blog-snippet">
                            This is a short snippet of the first blog article. It gives a preview of the content and invites the reader to click to read more.
                        </p>
                    </div>
                </div><div className="blog-card">
                    <img
                        src="https://woofwagwalk.co.uk/wp-content/uploads/2025/02/3H5A5700.jpg"
                        alt="Blog Article 1"
                        className="blog-image"
                    />
                    <h3 className="blog-title">Blog Article 3</h3>
                    <div className="blog-text">
                        <p className="blog-snippet">
                            This is a short snippet of the first blog article. It gives a preview of the content and invites the reader to click to read more.
                        </p>
                    </div>
                </div>
            </div>
            <Link to="/blogs" className="buton-sex">
                See more articles
            </Link>
        </div>
    );
};

export default BlogPreview;
