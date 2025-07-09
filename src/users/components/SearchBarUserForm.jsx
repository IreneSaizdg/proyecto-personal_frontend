import React from 'react'

export const SearchBarUserForm = () => {
  return (
    <div className="px-2 mx-2 px-md-5 mx-md-5 my-4">
      <form className="d-flex" role="search">
        <input
          type="search"
          className="form-control form-control-lg rounded-pill"
          placeholder="Search by user email..."
          aria-label="SearchByMail"
        />
        <button type="submit" className="btn btn-dark btn-lg d-flex align-items-center rounded-pill ">
          <i className="bi bi-search me-2"></i> Search
        </button>
      </form>
    </div>
  )
}
