import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'

export const UserDashboardPage = ({userName="UserName"}) => {
  // Usar datos de usuario del useContext
  return (
    <main>
      <HeaderHero
        title={`Hi! ${userName}`}
        subtitle="check the community ideas"
      />
      <div className="d-flex justify-content-center mb-5">
        <button type="button" className="btn btn-light btn-lg me-2">My favourites</button>
        <button type="button" className="btn btn-dark btn-lg">My collection</button>
      </div>
      <section>
        <SearchBarResourcesForm/>
        <ResourcesGallery/>
      </section>
    </main>
  )
}
