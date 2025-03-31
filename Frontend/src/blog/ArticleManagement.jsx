import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./ArticleManagement.css";

const API_URL = "http://localhost:5000/api/articles";

const ArticleManagement = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("dog");

  const [draft, setDraft] = useState({
    title: "",
    excerpt: "",
    content: "",
    imageUrl: "",
    category: "dog",
  });

  const [editingId, setEditingId] = useState(null);

  const fetchArticles = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchArticles();
  };

  const handleEdit = async (id, updated) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    setEditingId(null);
    fetchArticles();
  };

  const handleCreate = async () => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });
    if (res.ok) {
      setDraft({ title: "", excerpt: "", content: "", imageUrl: "", category: "dog" });
      fetchArticles();
    }
  };

  const handleInputChange = (e, field, id) => {
    const value = e.target.value;
    setArticles((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      )
    );
  };

  const filteredArticles = articles.filter((a) => a.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="article-management">
        {/* LEFT: Add Form */}
        <div className="article-form">
          <h2>➕ Add New Article</h2>
          <input
            type="text"
            placeholder="Image URL"
            value={draft.imageUrl}
            onChange={(e) => setDraft({ ...draft, imageUrl: e.target.value })}
          />
          <input
            type="text"
            placeholder="Title"
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Short Description"
            value={draft.excerpt}
            onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
          />
          <textarea
            rows="5"
            placeholder="Full Content"
            value={draft.content}
            onChange={(e) => setDraft({ ...draft, content: e.target.value })}
          />
          <select
            value={draft.category}
            onChange={(e) => setDraft({ ...draft, category: e.target.value })}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
          <button onClick={handleCreate}>Create Article</button>
        </div>

        {/* RIGHT: Article List */}
        <div className="article-list">
          <div className="article-list-header">
            <h2>📚 Articles</h2>
            <div className="toggle-buttons">
              <button
                className={selectedCategory === "dog" ? "active" : ""}
                onClick={() => setSelectedCategory("dog")}
              >
                Dog
              </button>
              <button
                className={selectedCategory === "cat" ? "active" : ""}
                onClick={() => setSelectedCategory("cat")}
              >
                Cat
              </button>
            </div>
          </div>

          {filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.imageUrl} alt={article.title} />
              {editingId === article.id ? (
                <>
                  <input
                    value={article.title}
                    onChange={(e) => handleInputChange(e, "title", article.id)}
                  />
                  <input
                    value={article.excerpt}
                    onChange={(e) => handleInputChange(e, "excerpt", article.id)}
                  />
                  <textarea
                    rows="4"
                    value={article.content}
                    onChange={(e) => handleInputChange(e, "content", article.id)}
                  />
                  <input
                    value={article.imageUrl}
                    onChange={(e) => handleInputChange(e, "imageUrl", article.id)}
                  />
                  <select
                    value={article.category}
                    onChange={(e) => handleInputChange(e, "category", article.id)}
                  >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                  </select>
                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => handleEdit(article.id, article)}>
                      Save
                    </button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <h4>{article.title}</h4>
                  <p><strong>Category:</strong> {article.category}</p>
                  <p>{article.excerpt}</p>
                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => setEditingId(article.id)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(article.id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleManagement;
