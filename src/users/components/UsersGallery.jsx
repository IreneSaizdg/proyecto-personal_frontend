import React from 'react'
import { UsersGrid } from './UsersGrid'
import { Pagination } from '../../ui/components/Pagination'

export const UsersGallery = () => {
  return (
    <article>
      <p>Users Gallery</p>
      <UsersGrid/>
      <Pagination/>
    </article>
  )
}
