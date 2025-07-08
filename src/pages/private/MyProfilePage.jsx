import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { ProfileCard } from '../../users/components/ProfileCard'

export const MyProfilePage = () => {
  return (
    <main>
      <p>Estás en Home Page (indicador provisional)</p>
      
      <HeaderHero/>
        <section>
          <ProfileCard/>
          <button>Editar mi perfil</button>
        </section>
    </main>
  )
}
