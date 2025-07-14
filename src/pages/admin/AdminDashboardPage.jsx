import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'

export const AdminDashboardPage = () => {
  return (
    <main>
      <HeaderHero
      title="Admin"
      subtitle="manage posts"
      />
      
      <section>
        <ResourcesGallery/>
      </section>
    </main>
    )
}
