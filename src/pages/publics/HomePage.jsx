// import { SearchBarForm } from ""
import { ResourcesGallery } from "../../resources/components/ResourcesGallery"
import { SearchBarResourcesForm } from "../../resources/components/SearchBarResourcesForm"
import { HeaderHero } from "../../ui/components/HeaderHero"

export const HomePage = () => {
  return (
    <main>
      <p>Estás en Home Page (indicador provisional)</p>
      
      <HeaderHero/>
      <div>
          <button>Registry</button>
          <button>Login</button>
      </div>
        <section>
          <SearchBarResourcesForm/>
          <ResourcesGallery/>
        </section>
    </main>
  )
}

