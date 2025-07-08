// IMPORTS
import { NavLink } from "react-router"
import { LogoutButton } from "./LogoutButton"

// NAVBAR
export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* Rutas públicas */}
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
        <li><NavLink to="/register" className="nav-link">Registro</NavLink></li>

        {/* Rutas privadas */}
        <li><NavLink to="/dashboard" className="nav-link">User Dashboard</NavLink></li>
        <li><NavLink to="/dashboard/create" className="nav-link">Crear Recurso</NavLink></li>
        <li><NavLink to="/dashboard/favourites" className="nav-link"> Mis Favoritos</NavLink></li>
        <li><NavLink to="/dashboard/my-resources" className="nav-link"> Mis Recursos</NavLink></li>
        <li><NavLink to="/dashboard/profile" className="nav-link">Mi Perfil</NavLink></li>

        {/* Rutas admin */}
        <li><NavLink to="/admin" className="nav-link">Admin Dashboard</NavLink></li>
        <li><NavLink to="/admin/users" className="nav-link">Admin Usuarios</NavLink></li>

        <li><LogoutButton/></li>
      </ul>
    </nav>
  )
}