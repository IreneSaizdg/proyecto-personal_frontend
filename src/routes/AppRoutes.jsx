// IMPORTS
import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { CardDetailPage, HomePage, LoginPage, RegisterPage } from '../pages/publics'
import { CreateCardPage, MyFavouritesPage, MyResourcesPage, MyProfilePage, UserDashboardPage } from '../pages/private'
import { AdminDashboardPage, AdminUsersPage } from '../pages/admin'
import { MainLayout } from '../ui/components/MainLayout'
import { PrivateRoute } from './PrivateRoute'




// RUTAS
export const AppRoutes = () => {
  return (
    <Routes>
      {/* Agrupar todas las rutas bajo un layout común */}
      <Route path='/' element={<MainLayout />}>

        {/* Rutas públicas */}
        <Route index element={<HomePage/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/card-detail' element={<CardDetailPage/>} />

        {/* Rutas privadas (usuario) */}
        <Route element={<PrivateRoute allowedRoles={['user']} />}>
          <Route path="/user">
            <Route index element={<UserDashboardPage />} />
            <Route path='create' element={<CreateCardPage />} />
            <Route path='my-resources' element={<MyResourcesPage />} />
            <Route path='favourites' element={<MyFavouritesPage />} />
            <Route path='profile' element={<MyProfilePage />} />
          </Route>
        </Route>

        {/* Rutas admin */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path='/admin-dashboard'>
            <Route index element={<AdminDashboardPage />} />
            <Route path='users' element={<AdminUsersPage />} />
          </Route>
        </Route>

        {/* Ruta por defecto: redirigir a Home si no encuentra nada */}
        <Route path='/*' element={<Navigate to='/' />} />

      </Route>
    </Routes>
  )
}
