import React from 'react'
import { UserRow } from './UserRow'

export const UsersGrid = () => {
  return (
    <section>
      <h3 className="fw-bold my-4 px-3 px-sm-1 px-md-0">Lista de usuarios</h3>
      <div className="d-flex row g-0 mb-5">
          <UserRow/>
          <UserRow/>
          <UserRow/>
      </div>
    </section>
  )
}
