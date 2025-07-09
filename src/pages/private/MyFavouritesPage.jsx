import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'

export const MyFavouritesPage = () => {
  return (
    <main>
      <HeaderHero
        title="Favourites 🤍"
        subtitle="check your saved favs"
      />
      
      <section>
        <SearchBarResourcesForm/>
        <ResourcesGallery/>
      </section>
    </main>
  )
}
