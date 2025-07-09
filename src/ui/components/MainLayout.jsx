// IMPORTS
import { Outlet } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'


/* LAYOUT: 
  estructura base para todas las páginas.
  Todas las rutas están anidadas dentro del layout y se renderizarán en <Outlet/> */
export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex-grow-1 min-vh-90">
        <Outlet />
        
      </div>  
      <Footer />
    </>
  )
}

