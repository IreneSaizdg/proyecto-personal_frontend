import React from 'react'
import { ResourcesGrid } from './ResourcesGrid'
import { Pagination } from '../../ui/components/Pagination'

export const ResourcesGallery = () => {
  return (
    <article>
      <p>Resources Gallery</p>
      <ResourcesGrid/>
      <Pagination/>
    </article>
  )
}
