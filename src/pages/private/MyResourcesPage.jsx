import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'

export const MyResourcesPage = () => {
  return (
    <main>
      <p>Estás en Mis Recursos (indicador provisional)</p>
      
      <HeaderHero/>
      <section>
        <SearchBarResourcesForm/>
        <ResourcesGallery/>
      </section>
    </main>
  )
}
