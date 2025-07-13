import { HeaderHero } from '../../ui/components/HeaderHero'
import { SearchBarResourcesForm } from '../../resources/components/SearchBarResourcesForm'
import { ResourcesGallery } from '../../resources/components/ResourcesGallery'
import { useUser } from '../../contexts/userContext'
import { useNavigate } from 'react-router'



export const UserDashboardPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  // {/* Provisional */} const {userprov,isRegister}=useContext(UserContext)

  return (
    <main>
      <HeaderHero
        title={`Hi! ${user.name}`}
        subtitle="check the community ideas"
      />
      <div className="d-flex justify-content-center mb-5">
        <button type="button" className="btn btn-light btn-lg me-2" onClick={() => navigate("/user/favourites")}> My favourites</button>
        <button type="button" className="btn btn-dark btn-lg" onClick={() => navigate("/user/my-resources")}>My collection</button>
      </div>

      <section>
        {/* Provisional */} {/* {JSON.stringify(user)} */}

        <SearchBarResourcesForm/>
        <ResourcesGallery/>
      </section>
    </main>
  )
}
