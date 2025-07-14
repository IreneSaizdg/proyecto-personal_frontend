import React, { useState } from 'react';

export const SearchBarResourcesForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Envía el término de búsqueda al padre
  };

  return (
    <div className="px-2 mx-2 px-md-5 mx-md-5 my-4">
      <form className="d-flex w-100 gap-2" role="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control form-control-lg rounded-pill"
          placeholder="Search by tag..."
          aria-label="SearchByTag"
          name="SearchByTag"
          value={searchTerm}
          
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-dark btn-lg d-flex align-items-center rounded-pill">
          <i className="bi bi-search me-2"></i> Search
        </button>
      </form>
    </div>
  );
};