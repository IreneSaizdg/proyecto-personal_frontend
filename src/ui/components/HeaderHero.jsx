import React from 'react'

export const HeaderHero = ({title = "Título", subtitle = "Subtítulo"}) => {
  return (
    <header className="d-flex flex-column justify-content-center align-items-center text-center mt-5 mb-4 pt-5">
      <h1 className="fw-bold">{title}</h1>
      <h2 className="fw-semibold">{subtitle}</h2>
    </header>
  )
}
