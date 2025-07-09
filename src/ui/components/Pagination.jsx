import React from 'react'

export const Pagination = () => {
  return (
  <nav aria-label="... ">
    <ul className="pagination justify-content-center ">
      <li className="page-item"><a href="#" className="page-link text-dark rounded-start-pill">Prev</a></li>
      <li className="page-item"><a className="page-link text-dark" href="#">1</a></li>
      <li className="page-item active">
        <a className="page-link bg-dark border-dark" href="#" aria-current="page">2</a>
      </li>
      <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
      <li className="page-item"><a className="page-link text-dark rounded-end-pill" href="#">Next</a></li>
    </ul>
  </nav>
  )
}
