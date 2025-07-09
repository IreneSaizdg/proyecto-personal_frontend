import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'

export const MyResourcesPage = () => {
  return (
    <main>      
      <HeaderHero
        title="Your posts"
        subtitle="check your collection"
      />
      <div className="d-flex justify-content-center mb-5">
        <button type="button" className="btn btn-warning btn-lg">Create a new card +</button>
      </div>

      <section>
        <SearchBarResourcesForm/>
        <ResourcesGallery/>
      </section>
    </main>
  )
}
