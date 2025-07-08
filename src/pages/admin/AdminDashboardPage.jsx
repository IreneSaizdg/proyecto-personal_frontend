import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'

export const AdminDashboardPage = () => {
  return (
      <main>
        <p>Estás en Admin Dashboard (indicador provisional)</p>
        
        <HeaderHero/>
        <section>
          <SearchBarResourcesForm/>
          <ResourcesGallery/>
        </section>
      </main>
    )
}
