import React from 'react'
import { HeaderHero } from '../../ui/components/HeaderHero'
import { CreateResourceForm } from '../../resources/components/CreateResourceForm'

export const CreateCardPage = () => {
  return (
    <main>
      <p>Estás Create Card/ Resource (indicador provisional)</p>
      
      <HeaderHero/>
        <section>
          <CreateResourceForm/>
        </section>
    </main>
  )
}
