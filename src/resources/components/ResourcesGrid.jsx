// import React from 'react'
// import { ResourceCard } from './ResourceCard'

// export const ResourcesGrid = ({colectionTitle="nombre de búsqueda"}) => {

//   //llamo a la api y obtengo los cards

//   const cards=[
//     {
//         "resource_id": 1,
//         "user_id": 1,
//         "tags": [
//             "testing",
//             "image"
//         ],
//         "image": "https://i.pinimg.com/736x/28/a8/a4/28a8a4a286a76717dbebd4dd3ea744bb.jpg",
//         "title": "Title Card 1",
//         "description": "Description of card 1 for testing",
//         "links": [
//             "https://nodejs.org"
//         ],
//         "public": false,
//         "date": "2025-07-10T11:59:44.540Z",
//         "username": "User0"
//     },
//     {
//         "resource_id": 2,
//         "user_id": 1,
//         "tags": [
//             "testing"
//         ],
//         "image": "https://i.pinimg.com/736x/28/a8/a4/28a8a4a286a76717dbebd4dd3ea744bb.jpg",
//         "title": "Title Card 2",
//         "description": "Description of card 2 for testing",
//         "links": [
//             "https://expressjs.com"
//         ],
//         "public": true,
//         "date": "2025-07-10T11:59:44.540Z",
//         "username": "User0"
//     },
//     {
//         "resource_id": 3,
//         "user_id": 1,
//         "tags": [
//             "testing",
//             "image"
//         ],
//         "image": "https://i.pinimg.com/736x/28/a8/a4/28a8a4a286a76717dbebd4dd3ea744bb.jpg",
//         "title": "Title Card 3",
//         "description": "Description of card 3 for testing",
//         "links": [
//             "https://nodejs.org"
//         ],
//         "public": false,
//         "date": "2025-07-10T11:59:44.540Z",
//         "username": "User0"
//     },
//     {
//         "resource_id": 4,
//         "user_id": 1,
//         "tags": [
//             "testing"
//         ],
//         "image": "https://i.pinimg.com/736x/28/a8/a4/28a8a4a286a76717dbebd4dd3ea744bb.jpg",
//         "title": "Title Card 4",
//         "description": "Description of card 4 for testing",
//         "links": [
//             "https://expressjs.com"
//         ],
//         "public": true,
//         "date": "2025-07-10T11:59:44.540Z",
//         "username": "User0"
//     },
//     {
//         "resource_id": 5,
//         "user_id": 1,
//         "tags": [
//             "testing",
//             "image"
//         ],
//         "image": "https://i.pinimg.com/736x/28/a8/a4/28a8a4a286a76717dbebd4dd3ea744bb.jpg",
//         "title": "Title Card 5",
//         "description": "Description of card 5 for testing",
//         "links": [
//             "https://nodejs.org"
//         ],
//         "public": false,
//         "date": "2025-07-10T11:59:44.540Z",
//         "username": "User0"
//     },
//     {
//         "resource_id": 6,
//         "user_id": 1,
//         "tags": [
//             "testing"
//         ],
//         "image": "https://i.pinimg.com/736x/28/a8/a4/28a8a4a286a76717dbebd4dd3ea744bb.jpg",
//         "title": "Title Card 6",
//         "description": "Description of card 6 for testing",
//         "links": [
//             "https://expressjs.com"
//         ],
//         "public": true,
//         "date": "2025-07-10T11:59:44.540Z",
//         "username": "User0"
//     }
// ]
//   return (
//     <div>
//         <h3 className="fw-bold my-4 px-3 px-sm-1 px-md-0">Colección "{colectionTitle}"</h3>
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 gx-0 gy-0 mb-4">
//          {
//           cards.map((card)=>(
//             <ResourceCard key={card.resource_id} card={card}/>
//           ))
//          }
       
//         </div>
//     </div>
//     )
// }



import React from "react";
import { ResourceCard } from "./ResourceCard";



export const ResourcesGrid = ({ cards, collectionTitle }) => {
  if (!cards || cards.length === 0) {
    return <p className="px-3">No resources found.</p>;
  }
  return (
    <div>
      <h3 className="fw-bold my-4 px-3 px-sm-1 px-md-0">Colección "{ collectionTitle }"</h3>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 gx-0 gy-0 mb-4">
        {cards.map((card) => (
          <ResourceCard key={card.resource_id} card={card} />
        ))}
      </div>
    </div>
  );
};