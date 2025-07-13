// IMPORTS
import { NavLink } from "react-router"
import { LogoutButton } from "../../auth/components/LogoutButton"

// NAVBAR
export const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top px-3">
    <div className="container-fluid">
      <NavLink to="/" className="nav-link navbar-brand fw-bold fs-3">Arkiv</NavLink>
      
      <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto text-center d-flex gap-2">
          <li><NavLink to="/" className="nav-link">Inicio</NavLink></li>
          <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
          <li><NavLink to="/register" className="nav-link">Registro</NavLink></li>
          
          <li><NavLink to="/user" className="nav-link">User Dashboard</NavLink></li>
          <li><NavLink to="/user/create" className="nav-link">Crear Recurso</NavLink></li>
          <li><NavLink to="/user/favourites" className="nav-link"> Mis Favoritos</NavLink></li>
          <li><NavLink to="/user/my-resources" className="nav-link"> Mis Recursos</NavLink></li>
          <li><NavLink to="/user/profile" className="nav-link">Mi Perfil</NavLink></li>
          
          <li><NavLink to="/admin-dashboard" className="nav-link">Admin Dashboard</NavLink></li>
          <li><NavLink to="/admin-dashboard/users" className="nav-link">Admin Usuarios</NavLink></li>
          <LogoutButton/>
        </ul>
      </div>
    </div>
  </nav>

    
  )
}