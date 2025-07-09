import React from 'react'
import { RegisterForm } from '../../auth/components/RegisterForm'
import { HeaderHero } from '../../ui/components/HeaderHero'

export const RegisterPage = () => {
  return (
    <main>
      <HeaderHero
        title="Register"
        subtitle="join the community"
      />
      <RegisterForm/>
    </main>
  )
}
