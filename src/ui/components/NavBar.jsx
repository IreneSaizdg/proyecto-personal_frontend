// IMPORTS
import { NavLink } from "react-router"
import { LogoutButton } from "../../auth/components/LogoutButton"
import { useUser } from "../../contexts/userContext";


// NAVBAR
export const NavBar = () => {
  const { user, logout } = useUser();
  
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top px-3">
    <div className="container-fluid">
      <NavLink to="/" className="nav-link navbar-brand fw-bold fs-3">Arkiv</NavLink>
      
      <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto text-center d-flex gap-2">
          <li><NavLink to="/" className="nav-link"> Homepage </NavLink></li>

          {!user && (
            <>
              <li><NavLink to="/login" className="nav-link"> Login </NavLink></li>
              <li><NavLink to="/register" className="nav-link"> Register</NavLink></li>
            </>
          )}

          {user?.role === "user" && (
            <>
              <li><NavLink to="/user" className="nav-link"> Community </NavLink></li>
              <li><NavLink to="/user/create" className="nav-link"> Create Resource </NavLink> </li>
              <li><NavLink to="/user/my-resources" className="nav-link"> My resources </NavLink></li>
              <li><NavLink to="/user/favourites" className="nav-link"> My favourites </NavLink></li>
              <li><NavLink to="/user/profile" className="nav-link"> My profile </NavLink></li>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <li><NavLink to="/admin-dashboard" className="nav-link">Admin Dashboard</NavLink></li>
              <li><NavLink to="/admin-dashboard/users" className="nav-link">Manage Users</NavLink></li>
            </>
          )}

          {user && (<LogoutButton />)}
          
        </ul>
      </div>
    </div>
  </nav>

    
  )
}