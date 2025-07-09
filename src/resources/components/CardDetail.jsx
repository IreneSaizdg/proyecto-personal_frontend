import React from 'react'

export const CardDetail = ({
  image = "https://i.pinimg.com/736x/28/a8/a4/28a8a4a286a76717dbebd4dd3ea744bb.jpg",
  title = "Sample Title",
  description = "Sample description. Fill it with extra information of the created resource. Don't be shy, the space is infinite.",
  tags = ["Sample Tag 1", "Sample Tag 2"],
  links = ["https://example.com"],
  author = "name",
  isPrivate = false,
  isFavorite = true,
  createdAt = "today",
  onAddFav,
  onDelete,
  onEdit
}) => {
  return (

  <article className="card rounded-4 overflow-hidden shadow-sm border-1">
    <div className="row g-0 flex-column flex-md-row">
      {/* Imagen: 1/3 de ancho en desktop */}
      <div className="col-md-5">
        <div className="ratio ratio-1x1 bg-light h-100 w-100">
          <img src={image} className="img-fluid object-fit-cover w-100 h-100" alt={title}/>
        </div>
      </div>

      {/* Contenido: 2/3 en desktop */}
      <div className="col-md-7 ps-0 pb-3 ps-2 ps-md-4">
        <div className="card-body">
          {/* Badges */}
          <div className="d-flex gap-1 mb-0 justify-content-end">
            <span className="badge text-bg-dark">
              {isPrivate ? "Private" : "Public"}
            </span>
            <span className="badge text-bg-dark">
              {isFavorite ? "🤍 Fav" : ""}
            </span>
          </div>

          {/* Título */}
          <div className="mb-2">
            <h5 className="card-title mb-0 fw-bold fs-1">{title}</h5>
          </div>

          {/* Descripción */}
          {description && <p className="card-text mb-4 pe-0 pe-md-5">{description}</p>}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mb-3 d-flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="d-flex flex-wrap align-items-center justify-content-center bg-light text-dark border rounded-pill px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Enlaces */}
          {links.length > 0 && (
            <div className="mb-3">
              <p className="fw-semibold mb-1">Enlaces:</p>
              <ul className="list-unstyled mb-0">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-primary text-decoration-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Autor y fecha */}
          <p className="text-muted mb-3">Author: {author} / Date of creation: {createdAt}</p>

          {/* Botones */}
          <div className="d-flex justify-content-left mt-4 flex-wrap gap-2">
            <button onClick={onAddFav} className="btn btn-outline-dark btn-sm">
              {isFavorite ? "Quitar de favs" : "🤍 Añadir fav"}
            </button>
            <button onClick={onDelete} className="btn btn-outline-danger btn-sm">❌ Eliminar</button>
            <button onClick={onEdit} className="btn btn-outline-warning btn-sm">✏️ Editar</button>
          </div>
        </div>
      </div>
    </div>
  </article>
  );
};
