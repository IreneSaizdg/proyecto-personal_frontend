import React from 'react'
import { ResourceCard } from './ResourceCard'

export const ResourcesGrid = ({colectionTitle="nombre de búsqueda"}) => {
  return (
    <div>
        <h3 className="fw-bold my-4 px-3 px-sm-1 px-md-0">Colección "{colectionTitle}"</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 gx-0 gy-0 mb-4">
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
        </div>
    </div>
    )
}
