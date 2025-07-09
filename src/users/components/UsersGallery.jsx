import React from 'react'
import { UsersGrid } from './UsersGrid'
import { Pagination } from '../../ui/components/Pagination'

export const UsersGallery = () => {
  return (
    <article className="px-sm-3 px-md-5 d-flex flex-column align-items-center">
      <UsersGrid/>
      <Pagination/>
    </article>
  )
}
