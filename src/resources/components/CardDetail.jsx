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
      {/* Imagen: */}
      <div className="col-md-5">
        <div className="ratio ratio-1x1 bg-light h-100 w-100">
          <img src={image} className="img-fluid object-fit-cover w-100 h-100" alt={title}/>
        </div>
      </div>

      {/* Contenido: */}
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



//NUEVA CARD (AUN NO FUNCIONA):
// import React, { useEffect, useState } from 'react'
// import { useFetch } from 'react-router';

// export const CardDetail = ({
//   resourceId,
//   onAddFav,
//   onDelete,
//   onEdit
// }) => {

//   // useFetch con URLy el id dinámico
//   const { data: resource, loading, error, fetchData } = useFetch(
//     `http://localhost:5000/api/v1/resources/${resourceId}`
//   );

//   // Estado local para guardar la data mostrada y actualizarla si hace falta
//   const [resourceData, setResourceData] = useState(null);

//   // Cuando cambie el resourceId o se haga fetch, actualizar el estado local
//   useEffect(() => {
//     if (resource) {
//       setResourceData(resource);
//     }
//   }, [resource]);

//   // Manejar: el borrado de recurso
//   const handleDelete = async () => {
//     if (!window.confirm("¿Seguro que quieres eliminar este recurso?")) return;

//     try {
//       await fetchData(`http://localhost:5000/api/v1/resources/${resourceId}`, "DELETE"); //Llamadad directa al delete de la API
//       alert("Recurso eliminado correctamente");
//       if (onDelete) onDelete(resourceId); // Avisar al padre para actualizar lista o navegación
//     } catch (err) {
//       alert("Error eliminando recurso: " + (err.message || err));
//     }
//   };

//   // Manejar: favoritos(añadir-desañadir)
//   const handleAddFav = () => {
//     if (onAddFav) onAddFav(resourceId);
//   };

//   // TODO: Manejar: el editar recurso
//   const handleEdit = () => {
//     if (onEdit) onEdit(resourceId);
//   };

//   // Mientras carga
//   if (loading) return <p>Cargando recurso...</p>;
//   if (error) return <p className="text-danger">Error: {error.message || error.toString()}</p>;
//   if (!resourceData) return <p>No se encontró el recurso.</p>;

//   return (
//   <article className="card rounded-4 overflow-hidden shadow-sm border-1">
//     <div className="row g-0 flex-column flex-md-row">
//       {/* Image */}
//       <div className="col-md-5">
//         <div className="ratio ratio-1x1 bg-light h-100 w-100">
//           <img
//               src={resourceData.image || "https://i.pinimg.com/736x/28/a8/a4/28a8a4a286a76717dbebd4dd3ea744bb.jpg"}
//               className="img-fluid object-fit-cover w-100 h-100"
//               alt={resourceData.title || "Resource Image"}
//             />
//         </div>
//       </div>

//       {/* Contenido */}
//       <div className="col-md-7 ps-0 pb-3 ps-2 ps-md-4">
//         <div className="card-body">
//           {/* Badges */}
//           <div className="d-flex gap-1 mb-0 justify-content-end">
//             <span className="badge text-bg-dark">
//               {resourceData.isPrivate ? "Private" : "Public"}
//             </span>
//             <span className="badge text-bg-dark">
//               {resourceData.isFavorite ? "🤍 Fav" : ""}
//             </span>
//           </div>

//           {/* Título */}
//           <div className="mb-2">
//             <h5 className="card-title mb-0 fw-bold fs-1">{resourceData.title}</h5>
//           </div>

//           {/* Descripción */}
//           {description && <p className="card-text mb-4 pe-0 pe-md-5">{resourceData.description}</p>}

//           {/* Tags */}
//           {resourceData.tags && resourceData.tags.length > 0 && (
//             <div className="mb-3 d-flex flex-wrap gap-2">
//               {resourceData.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="d-flex flex-wrap align-items-center justify-content-center bg-light text-dark border rounded-pill px-3 py-1"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* Enlaces */}
//           {resourceData.links && resourceData.links.length > 0 && (
//             <div className="mb-3">
//               <p className="fw-semibold mb-1">Enlaces:</p>
//               <ul className="list-unstyled mb-0">
//                 {resourceData.links.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="link-primary text-decoration-underline"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Autor y fecha */}
//           <p className="text-muted mb-3">Author: {resourceData.author} / Date of creation: {createdAt}</p>

//           {/* Botones */}
//           <div className="d-flex justify-content-left mt-4 flex-wrap gap-2">
//             <button onClick={handleAddFav} className="btn btn-outline-dark btn-sm">
//               {resourceData.isFavorite ? "Quitar de favs" : "🤍 Añadir fav"}
//             </button>
//             <button onClick={handleDelete} className="btn btn-outline-danger btn-sm">❌ Eliminar</button>
//             <button onClick={handleEdit} className="btn btn-outline-warning btn-sm">✏️ Editar</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </article>
//   );
// };
