import React, { useContext } from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'
import { UserContext } from '../../contexts/userContext'

export const UserDashboardPage = () => {
  // Usar datos de usuario del useContext

const {user,isRegister}=useContext(UserContext)
  return (
    <main>
      <HeaderHero
        title={`Hi! ${user.name}`}
        subtitle="check the community ideas"
      />
      <div className="d-flex justify-content-center mb-5">
        <button type="button" className="btn btn-light btn-lg me-2">My favourites</button>
        <button type="button" className="btn btn-dark btn-lg">My collection</button>
      </div>
      <section>
        {
          JSON.stringify(user)
        }
        <SearchBarResourcesForm/>
        <ResourcesGallery/>
      </section>
    </main>
  )
}
