import React from 'react'
import { ResourcesGrid } from './ResourcesGrid'
import { Pagination } from '../../ui/components/Pagination'

export const ResourcesGallery = () => {
  return (
    <article className="px-sm-3 px-md-5 d-flex flex-column align-items-center">
      <ResourcesGrid/>
      <Pagination/>
    </article>
  )
}
