import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { ProfileCard } from '../../users/components/ProfileCard'

export const MyProfilePage = () => {
  return (
    <main>
      <HeaderHero
        title="Profile"
        subtitle="manage your info"
      />
      <ProfileCard/>
    </main>
  )
}
