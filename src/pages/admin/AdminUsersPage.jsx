// Ver todos los usuarios
// Detalle de usuario
// Editar usuario
import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarUserForm } from '../../users/components/SearchBarUserForm'
import { UsersGallery } from '../../users/components/UsersGallery'

export const AdminUsersPage = () => {
 return (
      <main>
        <p>Estás en Admin Users (indicador provisional)</p>
        
        <HeaderHero/>
        <section>
          <SearchBarUserForm/>
          <UsersGallery/>
        </section>
      </main>
    )
}
