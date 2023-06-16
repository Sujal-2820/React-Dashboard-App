import React from 'react';
import './Publish.css';

const Publish = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit logic
  };

  return (
    <div className="publish-container">
      <h2>Publish Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" rows="6"></textarea>
        </div>
        <button type="submit" className="publish-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Publish;
