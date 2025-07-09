import React from 'react'

export const UserCard = ({ 
    userName="Username", 
    role="Admin", 
    privileges=false,
    onDelete, 
    onEdit 
  }) => {

  return (
    <article className="card rounded-4 overflow-hidden">
      <div className="card-body">
        <h5 className="card-title">{userName}</h5>
        <p className="card-text text-muted">Role: {role}</p>
        <p className="card-text text-muted">Privileges: {privileges}</p>

        <div className="d-flex justify-content-between">
          <button onClick={onDelete} className="btn btn-outline-danger btn-sm">❌ Delete User</button>
          <button onClick={onEdit} className="btn btn-outline-warning btn-sm">✏️ Update User</button>
        </div>
      </div>
    </article>
  )
}
