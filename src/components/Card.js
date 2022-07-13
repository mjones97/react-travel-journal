import React from 'react'
import './Card.css'

export default function Card({item}) {
  return (
    <div className="card">
            <img src={item.imageUrl} alt="" />
            <div className="card-info">
                <span><i className="fa-solid fa-location-dot"></i></span>
                <span className="title">{item.location}</span>
                <span> <a href={item.googleMapsUrl}> View on Google Maps</a></span>
                <h1>{item.title}</h1>
                <h4>{item.startDate}-{item.endDate}</h4>
                <p>{item.description}</p>
            </div>
        </div>
  )
}
