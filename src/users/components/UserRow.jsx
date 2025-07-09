import React from 'react'

export const UserRow = ({ 
    email="user@samplemail.com", 
    role="Admin", 
    privileges="NO",
    onDelete, 
    onEdit  
  }) => {

  return (
    <article className="card rounded-2 overflow-hidden">
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5 className="card-title fw-semibold">{email}</h5>
          <p className="card-text text-muted mb-0">Role: {role}</p>
          <p className="card-text text-muted">Privileges: {privileges}</p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <button onClick={onDelete} className="btn btn-outline-danger btn-sm">❌ Delete User</button>
          <button onClick={onEdit} className="btn btn-outline-warning btn-sm">✏️ Update User</button>
        </div>
      </div>
    </article>
  )
}