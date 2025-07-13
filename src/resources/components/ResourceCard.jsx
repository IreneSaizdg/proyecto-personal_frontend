import React from 'react'

export const ResourceCard = ({card})=> {
  const {
    image,
    title,
    username
  }=card

    const onAddFav=()=>{}; 
    const onDelete=()=>{};
    const onEdit=()=>{}

  return (
    <article className="card rounded-4 overflow-hidden">
      <div className="ratio ratio-1x1 bg-secondary">
        <img src={image} className="img-fluid object-fit-cover" alt={title} />
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">Autor: {username}</p>

        <div className="d-flex justify-content-between">
          <button onClick={onAddFav} className="btn btn-outline-dark btn-sm">🤍 AddFav</button>
          <button onClick={onDelete} className="btn btn-outline-danger btn-sm">❌ Delete</button>
          <button onClick={onEdit} className="btn btn-outline-warning btn-sm">✏️ Edit</button>
        </div>
      </div>
    </article>
  )
}
