import React from 'react'
import { CardDetail } from '../../resources/components/CardDetail'

export const CardDetailPage = () => {
  return (
    <section className="mt-4 mt-md-5 m-0 m-md-2 m-xl-5 p-0 p-md-2 p-xl-5">
      <div className="text-end">
        <button className="btn btn-light rounded-pill border mb-2">
          <i className="bi bi-arrow-left me-2"></i> Volver a la galería
        </button>
      </div>
      
      <CardDetail/>
    </section>
  )
}
