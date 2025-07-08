import { LoginForm } from "../../auth/components/LoginForm"
import { HeaderHero } from "../../ui/components/HeaderHero"


export const LoginPage = () => {
  return (
    <main>
      <p>Estás en Login (indicador provisional)</p>
      
      <HeaderHero/>
        <section>
          <LoginForm/>
        </section>
    </main>
  )
}