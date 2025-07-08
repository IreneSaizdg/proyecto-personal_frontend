import React from 'react'
import { RegisterForm } from '../../auth/components/RegisterForm'
import { HeaderHero } from '../../ui/components/HeaderHero'

export const RegisterPage = () => {
  return (
    <main>
      <p>Estás en Registro (indicador provisional)</p>
      
      <HeaderHero/>
      <section>
        <RegisterForm/>
      </section>
    </main>
  )
}
