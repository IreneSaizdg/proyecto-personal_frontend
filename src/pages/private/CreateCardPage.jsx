import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { CreateResourceForm } from '../../resources/components/CreateResourceForm'

export const CreateCardPage = () => {
  return (
    <main>
      <HeaderHero
        title="Create Card"
        subtitle="Add it to your collection"
      />
    <section>
      <CreateResourceForm/>
    </section>
    </main>
  )
}
