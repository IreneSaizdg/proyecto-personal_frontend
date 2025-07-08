import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'

export const UserDashboardPage = () => {
  return (
    <main>
      <p>Estás en User Dashboard (indicador provisional)</p>
      
      <HeaderHero/>
      <div>
          <button>My Collection</button>
          <button>My Favourites</button>
      </div>
        <section>
          <SearchBarResourcesForm/>
          <ResourcesGallery/>
        </section>
    </main>
  )
}
