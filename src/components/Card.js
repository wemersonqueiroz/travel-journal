import React from "react"

export default function Card(props) {
  return (
    <div className="card place--card">
      <img
        src={props.place.imageUrl}
        className="place--img"
        alt={props.place.location}
      />
      <div>
        <h6>{props.place.location}</h6>
        <a href={props.place.googleMapsUrl}> View on Google Maps</a>
        <h2>{props.title}</h2>
        <h6>
          {props.place.startDate} - {props.place.endDate}
        </h6>
        <text>{props.place.description}</text>
      </div>
      <hr />
    </div>
  )
}
