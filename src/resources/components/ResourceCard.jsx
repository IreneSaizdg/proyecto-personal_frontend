import React from "react";
import { useNavigate } from "react-router";




export const ResourceCard = ({ card }) => {
  const { resource_id, image, title, username } = card;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/resources/card-detail/${resource_id}`);
  };

  const onAddFav = (e) => {
    e.stopPropagation(); //Evita que los clicks en botones disparen el handleClick delpadre
    console.log("Añadir a favoritos:", resource_id);
  };

  const onDelete = (e) => {
    e.stopPropagation();
    console.log("Eliminar recurso:", resource_id);
  };

  const onEdit = (e) => {
    e.stopPropagation();
    console.log("Editar recurso:", resource_id);
  };


  return (
    <article
      className="card rounded-4 overflow-hidden"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      
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
