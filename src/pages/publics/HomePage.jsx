// import { SearchBarForm } from ""
import { useNavigate } from "react-router";
import { ResourcesGallery } from "../../resources/components/ResourcesGallery"
import { SearchBarResourcesForm } from "../../resources/components/SearchBarResourcesForm"
import { HeaderHero } from "../../ui/components/HeaderHero"
import { useUser } from "../../contexts/userContext";



export const HomePage = () => {
  const { user } = useUser()
  const navigate = useNavigate();

  return (
    <main>      
      <HeaderHero
        title="Welcome!"
        subtitle="start searching inspo..."
      />

      {/* Mostrar botones solo si NO hay usuario logueado */}
      {!user && (
        <div className="d-flex justify-content-center mb-5">
          <button type="button" className="btn btn-light btn-lg me-2" onClick={() => navigate("/register")}>
            Registry
          </button>
          <button type="button" className="btn btn-dark btn-lg" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      )}

      <section>
        <ResourcesGallery />
      </section>
    </main>
  )
}

