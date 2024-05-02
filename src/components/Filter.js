// Filter.js
import React from 'react';

function Filter({ categories = [], selectedCategory, onCategoryChange }) {
  return (
    <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="">All</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default Filter;
