import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'
import { useNavigate } from 'react-router';


export const MyResourcesPage = () => {
  const navigate = useNavigate();

  return (
    <main>      
      <HeaderHero
        title="Your posts"
        subtitle="check your collection"
      />
      <div className="d-flex justify-content-center mb-5">
        <button type="button" className="btn btn-warning btn-lg" onClick={() => navigate("/user/create")}>Create a new card +</button>
      </div>

      <section>
        <ResourcesGallery/>
      </section>
    </main>
  )
}
