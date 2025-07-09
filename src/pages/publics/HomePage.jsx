// import { SearchBarForm } from ""
import { ResourcesGallery } from "../../resources/components/ResourcesGallery"
import { SearchBarResourcesForm } from "../../resources/components/SearchBarResourcesForm"
import { HeaderHero } from "../../ui/components/HeaderHero"

export const HomePage = () => {
  return (
    <main>      
      <HeaderHero
        title="Welcome!"
        subtitle="start searching inspo..."
      />
      <div className="d-flex justify-content-center mb-5">
          <button type="button" className="btn btn-light btn-lg me-2">Registry</button>
          <button type="button" className="btn btn-dark btn-lg">Login</button>
      </div>
      <section>
        <SearchBarResourcesForm />
        <ResourcesGallery />
      </section>
    </main>
  )
}

